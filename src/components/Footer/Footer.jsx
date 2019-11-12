import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Footer.css';
import * as site from '../../constants/site';
import findUsOnFacebookLogo from '../../assets/FB-FindUsonFacebook-online-512.png';
import instagramLogo from '../../assets/IG_Glyph_Fill.jpg';
import twitterLogo from '../../assets/Twitter_Logo_Blue.jpg';
import { FixedWidthCentral } from '../Layout/Centered';

const renderers = {
  heading: args => <p className={classnames(typography.smallMargins, typography.puppy)}>{args.children}</p>,
  paragraph: args => <p className={classnames(typography.smallMargins, typography.hattie)}>{args.children}</p>,
  strong: args => <span className={classnames(typography.smallMargins, typography.harvey)}>{args.children}</span>,
};

const markdown = `
  _${site.description}_
  
  **Please call Will on ${site.mobile} or email [${site.email}](mailto:${site.email})**

  Wood Farm Barn, High Green, Brooke, Norwich, Norfolk - NR15 1JE
  
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.footerText};
  background: ${({ theme }) => theme.color.footerBackground};

  padding: ${({ theme }) => `${theme.gap * 3}px 0`};

  @media (min-width: 600px) {
    padding: ${({ theme }) => `${theme.gap * 4}px 0`};
  }

  a {
    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.color.linkHover};
    text-decoration: underline;
  }
`;

const Map = styled.iframe`
  margin: ${({ theme }) => theme.gap * 2}px 0;
  height: 300px;
  border-radius: 10px;

  @media (min-width: 600px) {
    height: 400px;
  }

  @media (min-width: 1000px) {
    height: 600px;
  }
`;

const fullYear = new Date().getUTCFullYear();

const Footer = ({ className }) => (
  <FooterWrapper className={className}>
    <FixedWidthCentral>
      <Content markdown={markdown} renderers={renderers} />
      <Map
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ02KpLWjl2UcRFXEMUKcaNVA&key=AIzaSyAAuJJI9BKINNLj1ekKfll5akpzWyoWALg&zoom=11"
        allowFullScreen
      />
      <Content markdown={`### &copy; ${site.name} ${fullYear}`} renderers={renderers} />
    </FixedWidthCentral>
  </FooterWrapper>
);
// {/*<div className={styles.socialLinks}>*/}
// {/*  <a className={styles.instagramLink} href={site.instagramPage} rel="noopener noreferrer" target="_blank">*/}
// {/*    <img src={instagramLogo} alt="Find us on Instagram" className={styles.instagramLogo} />*/}
// {/*  </a>*/}
// {/*  <a className={styles.twitterLink} href={site.twitterPage} rel="noopener noreferrer" target="_blank">*/}
// {/*    <img src={twitterLogo} alt="Follow us on Twitter" className={styles.twitterLogo} />*/}
// {/*  </a>*/}
// {/*</div>*/}

// {/*<div className={styles.findUsOnFacebook}>*/}
// {/*  <a className={styles.findUsOnFacebookLink} href={site.facebookPage} rel="noopener noreferrer" target="_blank">*/}
// {/*    <img src={findUsOnFacebookLogo} alt="Find us on Facebook" className={styles.findUsOnFacebookLogo} />*/}
// {/*  </a>*/}
// {/*</div>*/}
Footer.defaultProps = {
  className: null,
};

export default Footer;
