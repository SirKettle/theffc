import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as routerActions } from 'redux-router5';
import useWindowScroll from '@react-hook/window-scroll';
import * as routerSelectors from '../../domains/router/routerSelectors';
import * as site from '../../constants/site';
import { getRouteTitle, navItemLinks, ROUTES } from '../../routes';
import {
  AnchorLink,
  CloseButton,
  ContactDetails,
  Content,
  Hr,
  LogoWrapper,
  Menu,
  NarrowLogoWrapper,
  NarrowMenu,
  NarrowMenuContainer,
  NarrowNavigationComponent,
  NarrowNavItem,
  NarrowNavLinkItem,
  NarrowTheFFCLogo,
  NavButton,
  NavigationComponent,
  OpenButton,
  TheFFCLogo,
  TheFFCLogoShadow,
} from './components';
import FixedRatioContainer from '../../components/FixedRatioContainer/FixedRatioContainer';
import { FixedWidthCentral } from '../../components/Layout/Centered';
import CloseIcon from '../../assets/images/svg/close';
import MenuIcon from '../../assets/images/svg/burger';

const mapStateToProps = state => ({
  activeRoute: routerSelectors.activeRouteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  // track: (key, data) => { trackClick(dispatch, key, data); },
  navigateTo: (name, params) => dispatch(routerActions.navigateTo(name, params)),
});

export const Navigation = ({
  className,
  activeRoute,
  // track,
  navigateTo,
  wide = true,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${getRouteTitle(activeRoute)} | ${site.name}`;
  }, [activeRoute]);

  return wide ? (
    <WideScreen className={className} activeRoute={activeRoute} navigateTo={navigateTo} />
  ) : (
    <NarrowScreen className={className} activeRoute={activeRoute} navigateTo={navigateTo} />
  );
};

export const WideScreen = React.memo(({ className, activeRoute, navigateTo }) => {
  // track,
  const scrollY = useWindowScroll(15);

  return (
    <NavigationComponent className={className} isScrolled={scrollY > 0} scrollY={scrollY}>
      <FixedWidthCentral>
        <Content>
          <LogoWrapper>
            <FixedRatioContainer width={428} height={66} overflow="visible">
              <TheFFCLogoShadow color="black" />
              <TheFFCLogo />
            </FixedRatioContainer>
          </LogoWrapper>
          <Menu>
            {navItemLinks.map(headerLink => {
              const isSelected = activeRoute && headerLink.name === activeRoute.name;
              return (
                <NavButton
                  key={headerLink.name}
                  onClick={() => {
                    navigateTo(headerLink.name);
                  }}
                  isSelected={isSelected}
                  disabled={isSelected}
                >
                  {headerLink.label}
                </NavButton>
              );
            })}
          </Menu>
          <ContactDetails>
            <AnchorLink href={site.mobileHref}>{site.mobile}</AnchorLink>
            <AnchorLink href={site.emailHref}>{site.email}</AnchorLink>
          </ContactDetails>
        </Content>
      </FixedWidthCentral>
    </NavigationComponent>
  );
});

export const NarrowScreen = React.memo(({ className, activeRoute, navigateTo }) => {
  // track,
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <NarrowNavigationComponent className={className} isScrolled={scrollY > 0}>
      <NarrowLogoWrapper>
        <FixedRatioContainer width={428} height={66}>
          <NarrowTheFFCLogo onClick={() => navigateTo(ROUTES.ROOT.name)} />
        </FixedRatioContainer>
      </NarrowLogoWrapper>
      <OpenButton onClick={() => setMenuVisible(true)}>
        <MenuIcon />
      </OpenButton>
      <NarrowMenuContainer visible={menuVisible}>
        <NarrowMenu>
          {navItemLinks.map(headerLink => {
            const isSelected = activeRoute && headerLink.name === activeRoute.name;
            return (
              <NarrowNavItem
                key={headerLink.name}
                onClick={() => {
                  navigateTo(headerLink.name);
                  setMenuVisible(false);
                }}
                isSelected={isSelected}
              >
                {headerLink.label}
              </NarrowNavItem>
            );
          })}
          <Hr />
          <NarrowNavLinkItem href={site.emailHref}>{site.email}</NarrowNavLinkItem>
          <NarrowNavLinkItem href={site.mobileHref}>{site.mobile}</NarrowNavLinkItem>
        </NarrowMenu>
        <CloseButton onClick={() => setMenuVisible(false)} width={'18px'} height={'18px'}>
          <CloseIcon />
        </CloseButton>
      </NarrowMenuContainer>
    </NarrowNavigationComponent>
  );
});

Navigation.defaultProps = {
  // track: () => {},
  navigateTo: () => {},
};

export const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
