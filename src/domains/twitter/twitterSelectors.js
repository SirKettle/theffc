import { createSelector } from 'reselect';
import * as site from '../../constants/site';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const modelSelector = state => state.twitter;

const padNum = (num) => {
  return num < 10 ? `0${num}` : num.toString();
};

const getTweetImages = (datum) => {
  return (datum.entities.media || [])
    .filter(m => m.type === 'photo')
    .map(m => ({
      src: m.media_url,
      width: m.sizes.small.w,
      height: m.sizes.small.h
    }));
};

export const getHashTags = (datum) => {
  return (datum.entities.hashtags || [])
    .map(hashTag => hashTag.text);
};

const composeTweet = (datum) => {
  const date = new Date(datum.created_at * 1000);
  const month = monthLabels[date.getUTCMonth()];
  const year = date.getUTCFullYear().toString().slice(2);
  const dateString = `${padNum(date.getUTCDate())} ${month} ${year}`;
  const textParts = datum.text.split(' ');
  const url = textParts.pop();
  const text = textParts.join(' ');
  return {
    text,
    url,
    time: `Posted ${dateString}`,
    images: getTweetImages(datum)
  };
};

const composeMdImage = datum => `![${site.name}](${datum.src})`;

const composeTweetMd = (tweet) => {
  const images = tweet.images.map(composeMdImage).join('');
  return `
  ${images}
  
  [${tweet.time}](${tweet.url}) - ${tweet.text}
  ---
  `;
};

export const directTweetsSelector = createSelector(
  modelSelector,
  (model) => {
    if (!model || !model.get('data')) {
      return [];
    }
    return model.get('data').toJS()
      .filter(datum => datum.retweeted === false)
      .filter(datum => datum.in_reply_to_screen_name === null);
  }
);

export const tweetsSelector = createSelector(
  directTweetsSelector,
  tweets => tweets.map(composeTweet)
);

export const imageSelector = createSelector(
  directTweetsSelector,
  tweets => tweets.map(getTweetImages).flatten()
);

export const imageWithHashTagSelector = tag => createSelector(
  directTweetsSelector,
  tweets => tweets
    .filter(tweet => getHashTags(tweet).includes(tag))
    .map(getTweetImages).flatten()
);

export const tweetsMarkdown = createSelector(
  tweetsSelector,
  (tweets) => {
    if (!tweets) {
      return null;
    }
    return tweets.map(composeTweetMd);
  }
);
