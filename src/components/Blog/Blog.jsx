import React from 'react';
import { connect } from 'react-redux';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import Content from '../Content/Content';

const getKey = () => `random-key-${Math.round(Math.random() * 100000000)}`;

const mapStateToProps = (state) => {
  return {
    tweets: twitterSelectors.tweetsMarkdown(state)
  };
};

function Blog({
  tweets = [],
  loadingContent = null,
  preContent = null
}) {
  if (!tweets) {
    if (loadingContent) {
      return (<Content markdown={loadingContent} />);
    }
    return (<div>Loading tweets...</div>);
  }

  return (
    <div className="blog">
      { preContent ? (<Content markdown={preContent} />) : null }
      { tweets.map(tweet => (<Content key={getKey()} markdown={tweet} />)) }
    </div>
  );
}

export default connect(mapStateToProps)(Blog);
