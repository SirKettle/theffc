import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Sections.css';
import Section from './Section';

const Sections = ({
  className,
  sections
}) => (
  <div className={classnames(styles.sections, className)}>
    {
      sections.map(section => (
        <div className={styles.sectionWrapper} key={section.title.replace(/ /g, '')}>
          <Section className={styles.section} {...section} />
        </div>
      ))
    }
  </div>
);

Sections.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired
};

Sections.defaultProps = {
  className: null
};

export default Sections;
