import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import styles from './styles.css';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import { selectRating } from '../../domains/googlePlace/selectors';
import kitchenImage from '../../assets/images/content/homepageimage.jpg';
import kitchenCopperImage from '../../assets/images/content/kitchen-copper.jpg';

// <img src="../img/homepageimage.jpg" alt="Handmade kitchens" width="350" height="233" className="right"/>

const columnsCopy = rating => [
  `
# ${site.description}

Specialising in bespoke kitchens, handmade fitted furniture and built in wardrobes – The Fitted Furniture Company is here to help you achieve a unique and wonderful solution for your home.

Our ethos is to design, make and install a beautiful piece of fitted furniture that is totally different and personal to you and your house. You can be assured that what is designed will be the best solution for you, your budget and your property, and not what someone else wants to sell you! Our design work is free of charge, and should help to visualise your ideas and give you a chance to be involved.
`,
  `
${rating ? `My google rating is ${rating}!` : 'Loading google rating'}

Latest 5 google reviews will go here - todo...
`,
];

const loadingImage = '';

const getImages = images => (images.length ? images.map(i => i.src) : [loadingImage]);

function Home({ images, rating, tweets }) {
  console.log(tweets.map(twitterSelectors.getHashTags));

  const copy = columnsCopy(rating);

  return (
    <Layout
      className={styles.layout}
      slideShowImages={[kitchenCopperImage].concat(getImages(images))}
      heroCopy={copy[0]}
    >
      <Columns>
        <Content markdown={copy[1]} justifyText="justify" />
      </Columns>
    </Layout>
  );
}

const mapStateToProps = state => ({
  ...routeNodeSelector('')(state),
  // progress: state.user.progress,
  // images: twitterSelectors.imageSelector(state),
  images: twitterSelectors.imageWithHashTagSelector('kitchen')(state),
  tweets: twitterSelectors.directTweetsSelector(state),
  rating: selectRating(state),
});

export default connect(mapStateToProps)(Home);
