import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import imageOffice from '../../assets/images/content/living_office.jpg';
import imageBooks from '../../assets/images/content/living_books.jpg';
import imageTv from '../../assets/images/content/living_tv.jpg';
import imageAlcove from '../../assets/images/content/living_alcove.jpg';

import img1ACBD561 from '../../assets/images/slides/living/1ACBD561-EF80-4685-AAFD-1EFE175F0AF0.jpg';
import imgETHY4390 from '../../assets/images/slides/living/ETHY4390a.jpg';
import imgIMG_4271 from '../../assets/images/slides/living/IMG_4271.jpg';
import imgIMG_4272 from '../../assets/images/slides/living/IMG_4272a.jpg';
import imgIMG_4680 from '../../assets/images/slides/living/IMG_4680.jpg';
import imgIMG_4687 from '../../assets/images/slides/living/IMG_4687.jpg';
import imgIMG_5041 from '../../assets/images/slides/living/IMG_5041a.jpg';
import imgIMG_5098 from '../../assets/images/slides/living/IMG_5098.jpg';
import imgIMG_6052 from '../../assets/images/slides/living/IMG_6052.jpg';
import imgIMG_8824 from '../../assets/images/slides/living/IMG_8824.jpg';
import img01 from '../../assets/images/slides/living/01.jpg';


import imgIMG_4897 from '../../assets/images/slides/living2/IMG_4897.jpg';
import imgIMG_5061 from '../../assets/images/slides/living2/IMG_5061.jpg';
import imgIMG_5174 from '../../assets/images/slides/living2/IMG_5174.jpg';
import imgIMG_5175 from '../../assets/images/slides/living2/IMG_5175.jpg';
import imgIMG_5432 from '../../assets/images/slides/living2/IMG_5432.jpg';
import imgIMG_5598 from '../../assets/images/slides/living2/IMG_5598.jpg';
import imgIMG_5662 from '../../assets/images/slides/living2/IMG_5662.jpg';
import imgIMG_5817 from '../../assets/images/slides/living2/IMG_5817.jpg';
import imgIMG_6367 from '../../assets/images/slides/living2/IMG_6367.jpg';
import imgIMG_6370 from '../../assets/images/slides/living2/IMG_6370.jpg';
import imgIMG_7696 from '../../assets/images/slides/living2/IMG_7696.jpg';
import imgIMG_7698 from '../../assets/images/slides/living2/IMG_7698.jpg';
import imgIMG_8755 from '../../assets/images/slides/living2/IMG_8755.jpg';
import imgIMG_8827 from '../../assets/images/slides/living2/IMG_8827.jpg';
import imgIMG_9387 from '../../assets/images/slides/living2/IMG_9387.jpg';
import imgIMG_9390 from '../../assets/images/slides/living2/IMG_9390.jpg';

const columnsCopy = [
  `
# ${site.name} specialises in designing and manufacturing bespoke living solutions for your house in Norfolk and Suffolk.

We can supply your house with a perfectly designed and immaculately finished piece of living room furniture.
`,
  `
### Bookcases and Shelving displays

Customers often want to hide away toys, games and files in the cupboards below and display their photos and cherished books at high level. We work with this instruction and provide wonderful fitted furniture sympathetic to its surroundings.

![Bookcases and Shelving displays - bespoke living room furniture](${imageBooks})

### Alcove Units

An extremely common solution for Victorian and Edwardian houses, typically with doors at the base and fixed or adjustable shelving above. TV’s are also commonly integrated into the top unit.

![Alcove Units - bespoke living room furniture](${imageAlcove})
`,
  `

### TV and Media Units

![TV and Media Units - bespoke living room furniture](${imageTv})

Leave the cable management to us, TV’s sound bars and sky boxes are all integrated seamlessly into our cabinetry. Your bespoke piece of furniture will hide away all the equipment you don’t want to see, and provide plenty of useful storage as well.

### Offices

![Offices - bespoke living room furniture](${imageOffice})

We can integrate pull out printers, filing drawers, stationary drawers and pcs, and we also house safes into cupboards. Or anything else unique to your study!
`,
];

// const getImages = images => [fallbackImage].concat(images.map(i => i.src));
const getImages = () => [
  imgIMG_4897,
  imgIMG_5061,
  imgIMG_5174,
  imgIMG_5175,
  imgIMG_5432,
  imgIMG_5598,
  imgIMG_5662,
  imgIMG_5817,
  imgIMG_6367,
  imgIMG_6370,
  imgIMG_7696,
  imgIMG_7698,
  imgIMG_8755,
  imgIMG_8827,
  imgIMG_9387,
  imgIMG_9390,
  img1ACBD561,
  imgETHY4390,
  imgIMG_4271,
  imgIMG_4272,
  imgIMG_4680,
  imgIMG_4687,
  imgIMG_5041,
  imgIMG_5098,
  imgIMG_6052,
  imgIMG_8824,
  img01,
];

function Living({ images }) {
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
  images: twitterSelectors.imageWithOneOfHashTagsSelector(['living'])(state),
});

export default connect(mapStateToProps)(Living);
