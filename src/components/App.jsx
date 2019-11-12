import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import styled, { createGlobalStyle } from 'styled-components';
import NotFound from './NotFound';

import '../css/reset.css';
import { components } from '../routes';
import * as twitterActions from '../domains/twitter/twitterActions';
import * as googlePlaceActions from '../domains/googlePlace/actions';
// import wallpaper from './assets/images/

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.color.canvas || theme.color.text};
  }
  
  body {
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    max-width: 1400px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  
  #app {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    margin: 0 auto;
    width: 100%;
  }
  
  hr {
    border: none;
    height: 1px;
    background: rgba(0,0,0,0.1);
    margin: 2rem 0;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const mapStateToProps = () => routeNodeSelector('');

const mapDispatchToProps = dispatch => ({
  loadTweets: count => {
    twitterActions.loadTweets(dispatch, count);
  },
  loadGooglePlace: () => {
    googlePlaceActions.loadGooglePlace(dispatch);
  },
});

function App({ route, loadTweets, loadGooglePlace }) {
  useEffect(() => {
    loadTweets();
    loadGooglePlace();
  }, []);

  const segment = route ? route.name.split('.')[0] : undefined;
  if (!components[segment]) {
    window.location.href = '/#/';
  }

  return (
    <Fragment>
      <GlobalStyle />
      <StyledApp>{React.createElement(components[segment] || NotFound)}</StyledApp>
    </Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
