import 'whatwg-fetch';
import tweetsJson from '../../../mock/data/tweets.json';
import { twitterUserId } from '../../constants/site';

export const actionTypes = {
  LOAD_TWEETS_PENDING: 'LOAD_TWEETS_PENDING',
  LOAD_TWEETS_SUCCESS: 'LOAD_TWEETS_SUCCESS',
  LOAD_TWEETS_ERROR: 'LOAD_TWEETS_ERROR'
};

const isDebugMode = false;

export function loadTweets(dispatch) {
  dispatch({
    type: actionTypes.LOAD_TWEETS_PENDING
  });

  if (isDebugMode) {
    setTimeout(() => {
      dispatch({
        type: actionTypes.LOAD_TWEETS_SUCCESS,
        payload: tweetsJson
      });
    }, 300);
    return null;
  }

  return fetch(`http://server.willthirkettle.co.uk/api/tweets.php?count=7&user=${twitterUserId}`, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }, (error) => {
    console.log(error);
  }).then((payload) => {
    dispatch({
      type: actionTypes.LOAD_TWEETS_SUCCESS,
      payload
    });
  });
}
