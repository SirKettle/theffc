import React from 'react';
import { connect } from 'react-redux';
import { actions as routerActions } from 'redux-router5';
import * as routerSelectors from '../../domains/router/routerSelectors';
import * as site from '../../constants/site';
import { navItemLinks } from '../../routes';
import { CenteredContent, Menu, NavButton, NavigationComponent, NavItem } from './components';

const mapStateToProps = state => ({
  activeRoute: routerSelectors.activeRouteSelector(state),
});

const mapDispatchToProps = dispatch => ({
  // track: (key, data) => { trackClick(dispatch, key, data); },
  navigateTo: (name, params) => dispatch(routerActions.navigateTo(name, params)),
});

export const Index = ({
  className,
  activeRoute,
  // track,
  navigateTo,
}) => {
  return (
    <NavigationComponent className={className}>
      <CenteredContent isFlex>
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
              >
                {headerLink.label}
              </NavButton>
            );
          })}
        </Menu>
        <NavItem>{site.mobile}</NavItem>
      </CenteredContent>
    </NavigationComponent>
  );
};

Index.defaultProps = {
  // track: () => {},
  navigateTo: () => {},
};

export const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
