import React  from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { actions as routerActions } from 'redux-router5';
// import { trackClick } from '../../domains/ui/uiActions';
import * as routerSelectors from '../../domains/router/routerSelectors';
import styles from './Navigation.css';
import Button from '../../components/Button/Button';
import * as site from '../../constants/site';
import { navItemLinks } from '../../routes';

const mapStateToProps = state => ({
  activeRoute: routerSelectors.activeRouteSelector(state)
});

const mapDispatchToProps = dispatch => ({
  // track: (key, data) => { trackClick(dispatch, key, data); },
  navigateTo: (name, params) => dispatch(routerActions.navigateTo(name, params))
});

export const Navigation = ({
  className,
  activeRoute,
  // track,
  navigateTo
}) => {
  return (
    <div className={classnames(className, styles.nav)}>
      <div className={styles.menu}>
        {
          navItemLinks
            .map((headerLink) => {
              const isSelected = activeRoute && headerLink.name === activeRoute.name;
              return (
                <Button
                  key={headerLink.name}
                  onClick={() => {
                    navigateTo(headerLink.name);
                  }}
                  className={classnames(styles.item, styles.button, {
                    [styles.selected]: isSelected })}
                >{headerLink.label}</Button>
              );
            })
        }
      </div>
      <div className={classnames(styles.item, styles.telNo)}>{site.mobile}</div>
    </div>
  );
};

Navigation.defaultProps = {
  className: 'header',
  // track: () => {},
  navigateTo: () => {}
};

export const Connected = connect(mapStateToProps, mapDispatchToProps)(Navigation);
