import React from 'react';
import classnames from 'classnames';
import styles from './FixedRatioContainer.css';

const FixedRatioContainer = ({
  className,
  width,
  height,
  children
}) => (
  <div
    className={classnames(styles.fixedRatioContainer, className)}
    style={{ paddingTop: `${(height / width) * 100}%` }}
  >
    <div className={styles.fixedRatioContainerInner}>
      { children }
    </div>
  </div>
);

FixedRatioContainer.defaultProps = {
  className: null,
  image: null,
  tag: null,
  label: null
};

export default FixedRatioContainer;
