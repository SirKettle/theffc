import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TweetButton extends Component {

  componentDidMount() {
    if (
      window.twttr &&
      window.twttr.widgets
    ) {
      window.twttr.widgets.load();
    }
  }

  getTweetPrePopulatedText = () => {
    return encodeURIComponent(this.props.text);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        className={classnames(className)}
      >
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${this.getTweetPrePopulatedText()}`}
          data-size="large"
        >Tweet</a>
      </div>
    );
  }
}

TweetButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};

TweetButton.defaultProps = {
  className: 'tweet-button',
  text: 'holo holo - Personal petcare for Gedling, Carlton and surrounding areas.'
};
