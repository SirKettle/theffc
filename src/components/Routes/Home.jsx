import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import styles from './styles.css';
import Blog from '../Blog/Blog';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import { selectRating } from '../../domains/googlePlace/selectors';

const columnsCopy = [
  `
# ${site.strap}
## ${site.description}
`,
  `
For most people who own a dog or small pet, having someone look after them while away proves to be a major problem. This includes work, holidays or other long distance commitments. 

>Simply, who can take care of their dog, cat or small pet while the owner is away? 
`,
  `
**${site.name}** primarily focuses on providing dog walks and day care. However, I also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`,
];

const loadingImage = '';

const getImages = images => (images.length ? images.map(i => i.src) : [loadingImage]);

function Home({ images, rating, tweets }) {
  console.log(tweets.map(twitterSelectors.getHashTags));

  return (
    <Layout className={styles.layout} slideShowImages={getImages(images)} heroCopy={columnsCopy[0]}>
      {rating ? `My google rating is ${rating}!` : 'Loading google rating'}
      <Columns>
        <Blog />
        <Content markdown={columnsCopy[1]} justifyText="justify" />
        <Content markdown={columnsCopy[2]} justifyText="justify" />
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
