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
import fallbackImage from '../../assets/images/content/living-fallback.jpg';

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

const getImages = images => [fallbackImage].concat(images.map(i => i.src));

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
