import React, { Fragment } from 'react';
import { useWindowWidth, useWindowHeight } from '@react-hook/window-size';
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
import { maxMobileWidthPx, maxWidthPx } from '../../constants/site';

export const Layout = ({ className, children }) => {
  const windowWidth = useWindowWidth();
  const windowHeight = useWindowHeight();
  const wide = windowWidth > maxMobileWidthPx || windowHeight < 600;
  return (
    <Root className={className}>
      <Navigation wide={wide} />
      {children}
      <LayoutFooter />
    </Root>
  );
};

Layout.defaultProps = {
  className: null,
};

export const PageLayout = ({ children, slideShowImages, hero, heroCopy, heroCopyClassName }) => {
  const windowWidth = useWindowWidth();
  const wide = windowWidth > maxMobileWidthPx;

  return (
    <Fragment>
      <FixedWidthCentral noPadding width={maxWidthPx}>
        <HeroWrapper>
          {slideShowImages ? <SlideShow images={slideShowImages} width={wide ? 2 : 4} height={wide ? 1 : 5} maxWidth={maxWidthPx} /> : null}
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
};

PageLayout.defaultProps = {
  slideShowImages: null,
  hero: null,
  heroCopy: null,
  heroCopyClassName: null,
};

export default PageLayout;
