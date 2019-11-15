import { createSelector } from 'reselect';

export const modelSelector = state => state.googlePlace;

export const googlePlaceSelector = createSelector(
  modelSelector,
  model => {
    if (!model || !model.get('data')) {
      return null;
    }
    return model.get('data').toJS();
  },
);

export const selectRating = createSelector(
  googlePlaceSelector,
  data => (data ? data.rating : undefined),
);

export const selectReviewCount = createSelector(
  googlePlaceSelector,
  data => (data ? data.user_ratings_total : undefined),
);

export const selectReviews = createSelector(
  googlePlaceSelector,
  data => (data ? data.reviews : []),
);
