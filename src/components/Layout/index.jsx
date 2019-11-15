import React, { Fragment } from 'react';
import { Connected as Navigation } from '../../containers/Navigation/';
import SlideShow from '../SlideShow/SlideShow';
import FixedRatioContainer from '../FixedRatioContainer/FixedRatioContainer';
import { FixedWidthCentral } from './Centered';
import {
  CenteredContent,
  Header,
  Hero,
  HeroContent,
  HeroWrapper,
  LayoutFooter,
  LogoWrapper,
  MainContent,
  Root,
  TheFFCLogo,
} from './components';

export const Layout = ({ className, children }) => (
  <Root className={className}>
    <Header>
      <CenteredContent isFlex>
        <LogoWrapper>
          <FixedRatioContainer width={400} height={64}>
            <TheFFCLogo />
          </FixedRatioContainer>
        </LogoWrapper>
      </CenteredContent>
    </Header>
    <Navigation />
    {children}
    <LayoutFooter />
  </Root>
);

Layout.defaultProps = {
  className: null,
};

const PageLayout = ({ children, slideShowImages, hero, heroCopy, heroCopyClassName }) => (
  <Fragment>
    <HeroWrapper>
      {slideShowImages ? <SlideShow images={slideShowImages} /> : null}
      {hero ? <Hero src={hero} alt="hero" /> : null}
      {heroCopy ? (
        <FixedWidthCentral>
          <HeroContent markdown={heroCopy} className={heroCopyClassName} />
        </FixedWidthCentral>
      ) : null}
    </HeroWrapper>
    <FixedWidthCentral>
      <MainContent>{children}</MainContent>
    </FixedWidthCentral>
  </Fragment>
);

PageLayout.defaultProps = {
  slideShowImages: null,
  hero: null,
  heroCopy: null,
  heroCopyClassName: null,
};

export default PageLayout;
