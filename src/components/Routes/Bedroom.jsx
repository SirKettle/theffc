import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import fallbackImage from '../../assets/images/content/bedroom-fallback.jpg';
import imagePremium from '../../assets/images/content/bedroom-premium.jpg';
import imageFullcarcass from '../../assets/images/content/bedroom-fullcarcass.jpg';
import imageStyle1 from '../../assets/images/content/bedroom-style1.jpg';
import imageStyle2 from '../../assets/images/content/bedroom-style2.jpg';
import imageStyle3 from '../../assets/images/content/bedroom-style3.jpg';

import iIMG_0994 from '../../assets/images/slides/bedroom/IMG_0994.jpg';
import iIMG_4482 from '../../assets/images/slides/bedroom/IMG_4482.jpg';
import iIMG_4483 from '../../assets/images/slides/bedroom/IMG_4483.jpg';
import iIMG_4485 from '../../assets/images/slides/bedroom/IMG_4485.jpg';
import iIMG_4489 from '../../assets/images/slides/bedroom/IMG_4489.jpg';
import iIMG_4503a from '../../assets/images/slides/bedroom/IMG_4503a.jpg';
import iIMG_4686 from '../../assets/images/slides/bedroom/IMG_4686.jpg';
import iIMG_5131 from '../../assets/images/slides/bedroom/IMG_5131.jpg';
import iIMG_5522 from '../../assets/images/slides/bedroom/IMG_5522.jpg';
import iIMG_6002 from '../../assets/images/slides/bedroom/IMG_6002.jpg';
import iIMG_6031 from '../../assets/images/slides/bedroom/IMG_6031.jpg';
import iIMG_6425 from '../../assets/images/slides/bedroom/IMG_6425.jpg';
import iIMG_6585 from '../../assets/images/slides/bedroom/IMG_6585.jpg';
import iIMG_9379 from '../../assets/images/slides/bedroom/IMG_9379.jpg';
import iIMG_9406 from '../../assets/images/slides/bedroom/IMG_9406.jpg';

const columnsCopy = [
  `
  # Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop
`,
  `
### Premium Fittings

![Premium Fittings - Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop](${imagePremium})

All our fittings and fixtures are premium quality, German manufactured. Wardrobe hinges are made by market leaders Blum with integrated and adjustable soft close, and with full adjustment to ensure perfect door gap alignment. Our drawer runners are again made by the same manufacture and can take a staggering 60KG, the runner operates with a soft close feature, is concealed and has a lifetime guarantee.

### Full Carcassing

![Full Carcassing - Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop](${imageFullcarcass})

Our bedroom cupboards are constructed with full 18mm carcassing, keeping the dust and the condensation away from your clothes. This provides a more refined solution with greater storage freedom.
`,
  `

### Any Style

Any style, any colour and any design, the choice is yours.

![Any Style - Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop](${imageStyle1})

Larger national companies will have you choose a style from a “range” and colour from their “palette”, we are totally bespoke so you decide how you would like your cupboards to look.

![Any Style! - Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop](${imageStyle2})

We design traditional looking cupboards for period houses, or contemporary cupboards for a modern looking solution.

![Any Style! - Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop](${imageStyle3})
`,
];

// const getImages = images => [fallbackImage].concat(images.map(i => i.src));
const getImages = () => [
  fallbackImage,
  iIMG_6425,
  iIMG_6585,
  iIMG_4489,
  iIMG_4482,
  iIMG_4483,
  iIMG_4485,
  iIMG_4503a,
  iIMG_4686,
  iIMG_0994,
  iIMG_5131,
  iIMG_5522,
  iIMG_6002,
  iIMG_6031,
  iIMG_9379,
  iIMG_9406,
];

function Bedroom({ images }) {
  return (
    <PageLayout slideShowImages={getImages(images)} heroCopy={columnsCopy[0]}>
      <Columns>
        <Content markdown={columnsCopy[1]} />
        <Content markdown={columnsCopy[2]} />
      </Columns>
    </PageLayout>
  );
}

const mapStateToProps = state => ({
  ...routeNodeSelector('')(state),
  images: twitterSelectors.imageWithOneOfHashTagsSelector(['bedroom'])(state),
});

export default connect(mapStateToProps)(Bedroom);
