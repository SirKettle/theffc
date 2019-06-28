import React  from 'react';
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

Sections.defaultProps = {
  className: null
};

export default Sections;
