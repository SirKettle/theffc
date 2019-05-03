import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Section.css';
import flowersImage from '../../assets/images/logo-flowers_252x292.png';

const Section = ({
  className,
  title,
  image,
  tag,
  label,
  details
}) => (
  <div className={classnames(styles.section, className)}>
    <div className={styles.flowers} style={{ backgroundImage: `url(${flowersImage})` }} />
    { title ?
      <Content
        className={classnames(typography.beau, styles.title)}
        markdown={title}
        noRenderers
      /> : null }
    { label ?
      <Content
        className={classnames(typography.puppy, styles.label)}
        markdown={label}
        noRenderers
      /> : null }
    <div className={styles.content}>
      <div className={styles.details}>
        <Content markdown={details} />
        { tag ?
          <Content
            className={classnames(typography.puppy, styles.tag)}
            markdown={tag}
            noRenderers
          /> : null
        }
      </div>
      { image ?
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
        : null }
    </div>
  </div>
);

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  tag: PropTypes.string,
  label: PropTypes.string,
  details: PropTypes.string.isRequired
};

Section.defaultProps = {
  className: null,
  image: null,
  tag: null,
  label: null
};

export default Section;
