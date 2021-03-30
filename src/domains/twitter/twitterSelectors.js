import { createSelector } from 'reselect';

export const modelSelector = state => state.twitter;

const isHttps = location.protocol.includes('https');

export const directTweetsSelector = createSelector(
  modelSelector,
  model => {
    if (!model || !model.get('data') || !model.getIn(['data', 'data'])) {
      return [];
    }
    return model
      .getIn(['data', 'data'])
      .toJS();
  },
);

export const imageWithOneOfHashTagsSelector = (hashTags = []) =>
  createSelector(
    directTweetsSelector,
    tweets => tweets
        .filter(tweet => tweet.hashTags.some(ht => hashTags.includes(ht)))
        .map(tweet => tweet.images)
        .flatten()
        .map(image => ({
          ...image,
          src: isHttps ? image.srcHttps : image.src
        }))
  );

