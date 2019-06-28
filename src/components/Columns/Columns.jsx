import React  from 'react';
import classnames from 'classnames';
import styles from './Columns.css';

const Columns = ({
  className,
  children
}) => (
  <div className={classnames(styles.columns, className)}>
    { children }
  </div>
);

Columns.defaultProps = {
  className: null
};

export default Columns;
