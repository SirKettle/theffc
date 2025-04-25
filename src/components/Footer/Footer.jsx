import React from 'react';
import styled from 'styled-components';
import Content from '../Content/Content';
import * as site from '../../constants/site';
import { FixedWidthCentral } from '../Layout/Centered';
import { Paragraph, SmallPrint } from '../Typography';
import InstagramLogo from '../../assets/images/social/instagram.png';

const markdown = `
  ### Contact
  
  Please call Will on [${site.mobile}](${site.mobileHref}) or email [${site.email}](${site.emailHref}).

  If you would like to see more examples of our work, [![Instagram Logo](${InstagramLogo}) ${site.instagramLinkText}](${site.instagramPage})

  Wood Farm Barn, High Green, Brooke, Norwich, Norfolk - NR15 1JE
`;

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.footerText};
  background: ${({ theme }) => theme.color.footerBackground};

  padding: ${({ theme }) => `${theme.gap * 2}px 0 ${theme.gap * 3}px`};

  @media (min-width: 600px) {
    padding: ${({ theme }) => `${theme.gap * 2}px 0 ${theme.gap * 3}px`};
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
      <Content
        markdown={markdown}
      />
      <Map
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ02KpLWjl2UcRFXEMUKcaNVA&key=AIzaSyAAuJJI9BKINNLj1ekKfll5akpzWyoWALg&zoom=11"
        allowFullScreen
      />
      <Paragraph>
        {site.name} - {site.description}
      </Paragraph>
      <SmallPrint>
        &copy; {site.name} {fullYear}
      </SmallPrint>
    </FixedWidthCentral>
  </FooterWrapper>
);

Footer.defaultProps = {
  className: null,
};

export default React.memo(Footer);
