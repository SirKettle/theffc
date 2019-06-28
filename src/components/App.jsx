import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { routeNodeSelector } from 'redux-router5';
import NotFound from './NotFound';

import '../css/reset.css';
import styles from './App.css';
import { components } from '../routes';
import * as twitterActions from '../domains/twitter/twitterActions';
import * as googlePlaceActions from '../domains/googlePlace/actions';

const mapStateToProps = () => routeNodeSelector('');

const mapDispatchToProps = dispatch => ({
  loadTweets: (count) => { twitterActions.loadTweets(dispatch, count); },
  loadGooglePlace: () => { googlePlaceActions.loadGooglePlace(dispatch); }
});

function App({
  route,
  loadTweets,
  loadGooglePlace
}) {
  useEffect(() => {
    loadTweets();
    loadGooglePlace();
  }, []);

  const segment = route ? route.name.split('.')[0] : undefined;
  if (!components[segment]) {
    window.location.href = '/#/';
  }

  return (
    <div className={classnames(styles.App)}>
      { React.createElement(components[segment] || NotFound) }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
