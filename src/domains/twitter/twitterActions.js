import 'whatwg-fetch';
// import tweetsJson from '../../../mock/data/tweets.json';
import tweetsJson from '../../../mock/data/lfcTweets.json';
import { apiBaseUrl, twitterUserId } from '../../constants/site';

export const actionTypes = {
  LOAD_TWEETS_PENDING: 'LOAD_TWEETS_PENDING',
  LOAD_TWEETS_SUCCESS: 'LOAD_TWEETS_SUCCESS',
  LOAD_TWEETS_ERROR: 'LOAD_TWEETS_ERROR',
};

const isDebugMode = false;

export function loadTweets(dispatch, count = 30) {
  dispatch({
    type: actionTypes.LOAD_TWEETS_PENDING,
  });

  if (isDebugMode) {
    setTimeout(() => {
      dispatch({
        type: actionTypes.LOAD_TWEETS_SUCCESS,
        payload: tweetsJson,
      });
    }, 300);
    return null;
  }

  return fetch(`${apiBaseUrl}/twitter/tweets/${twitterUserId}?count=${count}`, {
    method: 'GET',
  })
    .then(
      response => {
        return response.json();
      },
      error => {
        console.log(error);
      },
    )
    .then(payload => {
      // {"errors":[{"code":34,"message":"Sorry, that page does not exist."}]}
      if (payload && payload.errors && payload.errors.length) {
        console.error('tweets error');
        return;
      }
      dispatch({
        type: actionTypes.LOAD_TWEETS_SUCCESS,
        payload,
      });
    });
}
