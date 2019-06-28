import React from 'react';
import classnames from 'classnames';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Footer.css';
import * as site from '../../constants/site';
import findUsOnFacebookLogo from '../../assets/FB-FindUsonFacebook-online-512.png';
import instagramLogo from '../../assets/IG_Glyph_Fill.jpg';
import twitterLogo from '../../assets/Twitter_Logo_Blue.jpg';

const renderers = {
  heading: args => (
    <p className={classnames(typography.smallMargins, typography.puppy)}>
      {args.children}
    </p>),
  paragraph: args => (
    <p className={classnames(typography.smallMargins, typography.hattie)}>{args.children}</p>),
  strong: args => (
    <span className={classnames(typography.smallMargins, typography.harvey)}>{args.children}</span>)
};

const markdown = `
  ${site.description}

  _${site.strap}_
  
  **Please call Will on ${site.mobile} or email [${site.email}](mailto:${site.email})**

  ### &copy; ${site.name} ${new Date().getUTCFullYear()}
`;

const Footer = ({
  className
}) => (
  <div className={classnames(styles.footer, className)}>
    <div className={classnames(styles.legal, className)}>
      <div className={styles.socialLinks}>
        <div className={styles.findUsOnFacebook}>
          <a className={styles.findUsOnFacebookLink} href={site.facebookPage} rel="noopener noreferrer" target="_blank">
            <img src={findUsOnFacebookLogo} alt="Find us on Facebook" className={styles.findUsOnFacebookLogo} />
          </a>
        </div>
        <a className={styles.instagramLink} href={site.instagramPage} rel="noopener noreferrer" target="_blank">
          <img src={instagramLogo} alt="Find us on Instagram" className={styles.instagramLogo} />
        </a>
        <a className={styles.twitterLink} href={site.twitterPage} rel="noopener noreferrer" target="_blank">
          <img src={twitterLogo} alt="Follow us on Twitter" className={styles.twitterLogo} />
        </a>
      </div>
      <Content markdown={markdown} renderers={renderers} />
    </div>
  </div>
);

Footer.defaultProps = {
  className: null
};

export default Footer;
