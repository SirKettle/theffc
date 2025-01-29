import React, { Fragment } from 'react';
import { Connected as Navigation } from '../../containers/Navigation/';
import SlideShow from '../SlideShow/SlideShow';
import { FixedWidthCentral } from './Centered';
import {
  Hero,
  HeroContent,
  HeroWrapper,
  LayoutFooter,
  MainContent,
  Root,
} from './components';

export const Layout = ({ className, children }) => (
  <Root className={className}>
    <Navigation />
    {children}
    <LayoutFooter />
  </Root>
);

Layout.defaultProps = {
  className: null,
};

export const PageLayout = ({ children, slideShowImages, hero, heroCopy, heroCopyClassName }) => (
  <Fragment>
    <FixedWidthCentral noPadding width={1400}>
      <HeroWrapper>
        {slideShowImages ? <SlideShow images={slideShowImages} /> : null}
        {hero ? <Hero src={hero} alt="hero" /> : null}
        {heroCopy ? (
          <FixedWidthCentral>
            <HeroContent markdown={heroCopy} className={heroCopyClassName} />
          </FixedWidthCentral>
      ) : null}
      </HeroWrapper>
    </FixedWidthCentral>
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
