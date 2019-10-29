import React from 'react';
import classnames from 'classnames';
import { Connected as Navigation } from '../../containers/Navigation/';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import SlideShow from '../SlideShow/SlideShow';
import FixedRatioContainer from '../FixedRatioContainer/FixedRatioContainer';
import styles from './Layout.css';
import Logo from '../../assets/images/logo/Logo';

const Layout = ({ className, children, slideShowImages, hero, heroCopy, heroCopyClassName }) => (
  <div className={classnames(styles.layout, className)}>
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <FixedRatioContainer className={styles.logoFixedSizeContainer} width={400} height={64}>
          <Logo className={styles.logo} />
        </FixedRatioContainer>
      </div>
    </div>
    <Navigation className={styles.nav} />
    <div className={styles.heroWrapper}>
      {slideShowImages ? <SlideShow images={slideShowImages} /> : null}
      {hero ? <img className={styles.hero} src={hero} alt="hero" /> : null}
      {heroCopy ? <Content markdown={heroCopy} className={classnames(styles.heroCopy, heroCopyClassName)} /> : null}
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.border} />
    <Footer className={styles.footer} />
  </div>
);

Layout.defaultProps = {
  className: null,
  slideShowImages: null,
  hero: null,
  heroCopy: null,
  heroCopyClassName: null,
};

export default Layout;
