import { createSelector } from 'reselect';

export const modelSelector = state => state.googlePlace;

export const googlePlaceSelector = createSelector(
  modelSelector,
  (model) => {
    if (!model || !model.get('data')) {
      return null;
    }
    return model.get('data').toJS();
  }
);

export const selectRating = createSelector(
  googlePlaceSelector,
  data => data ? data.rating : undefined
);
