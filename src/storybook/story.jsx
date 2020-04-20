import React from 'react';
import classnames from 'classnames';
import '../css/reset.css';
import styles from './story.css';
import { Heading, Paragraph } from '../components/Typography';

const Story = ({ title, summary, children, className, displayInfo }) => {
  return (
    <div className={classnames(styles.story, className)}>
      {displayInfo && (
        <div className={styles.info}>
          {title && <Heading>{title}</Heading>}
          {summary && <Paragraph>{summary}</Paragraph>}
        </div>
      )}
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

Story.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  displayInfo: React.PropTypes.bool,
};

Story.defaultProps = {
  className: 'some-story',
  title: null,
  summary: null,
  displayInfo: true,
};

export default Story;
