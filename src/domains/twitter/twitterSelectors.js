import { createSelector } from 'reselect';
import { any, compose, concat, filter, includes, map, pathOr, prop, propEq, uniq, uniqBy } from 'ramda';
import * as site from '../../constants/site';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const modelSelector = state => state.twitter;

const padNum = num => {
  return num < 10 ? `0${num}` : num.toString();
};

const isHttps = location.protocol.includes('https');

const mediaUrlProp = isHttps ? 'media_url_https' : 'media_url';

const mapMedia = m => ({
  src: m[mediaUrlProp],
  width: m.sizes.small.w,
  height: m.sizes.small.h,
});

const getTweetImages = datum => {
  const extraMedia = pathOr([], ['extended_entities', 'media'])(datum);
  const media = pathOr([], ['entities', 'media'])(datum);

  return compose(
    uniqBy(prop('src')),
    map(mapMedia),
    filter(propEq('type', 'photo')),
  )(media.concat(extraMedia));
};

export const getHashTags = datum => {
  const tags = pathOr([], ['entities', 'hashtags'])(datum);
  const extra = pathOr([], ['extended_entities', 'hashtags'])(datum);

  const allTags = concat(tags, extra);
  return compose(
    uniq,
    map(prop('text')),
  )(allTags);
};

export const getIncludesOneOfHashtags = (hashTags = []) => datum => {
  const tweetHashTags = getHashTags(datum);
  const isHashTagInTweet = tag => includes(tag)(tweetHashTags);
  return any(isHashTagInTweet)(hashTags);
};

const composeTweet = datum => {
  const date = new Date(datum.created_at * 1000);
  const month = monthLabels[date.getUTCMonth()];
  const year = date
    .getUTCFullYear()
    .toString()
    .slice(2);
  const dateString = `${padNum(date.getUTCDate())} ${month} ${year}`;
  const textParts = datum.text.split(' ');
  const url = textParts.pop();
  const text = textParts.join(' ');
  return {
    text,
    url,
    time: `Posted ${dateString}`,
    images: getTweetImages(datum),
  };
};

const composeMdImage = datum => `![${site.name}](${datum.src})`;

const composeTweetMd = tweet => {
  const images = tweet.images.map(composeMdImage).join('');
  return `
  ${images}
  
  [${tweet.time}](${tweet.url}) - ${tweet.text}
  ---
  `;
};

export const directTweetsSelector = createSelector(
  modelSelector,
  model => {
    if (!model || !model.get('data')) {
      return [];
    }
    return model
      .get('data')
      .toJS()
      .filter(datum => datum.retweeted === false)
      .filter(datum => datum.in_reply_to_screen_name === null);
  },
);

export const tweetsSelector = createSelector(
  directTweetsSelector,
  tweets => tweets.map(composeTweet),
);

export const imageSelector = createSelector(
  directTweetsSelector,
  tweets => tweets.map(getTweetImages).flatten(),
);

export const imageWithHashTagSelector = tag =>
  createSelector(
    directTweetsSelector,
    tweets =>
      tweets
        .filter(tweet => getHashTags(tweet).includes(tag))
        .map(getTweetImages)
        .flatten(),
  );

export const imageWithOneOfHashTagsSelector = (hashTags = []) =>
  createSelector(
    directTweetsSelector,
    tweets =>
      tweets
        .filter(getIncludesOneOfHashtags(hashTags))
        .map(getTweetImages)
        .flatten(),
  );

export const tweetsMarkdown = createSelector(
  tweetsSelector,
  tweets => {
    if (!tweets) {
      return null;
    }
    return tweets.map(composeTweetMd);
  },
);
