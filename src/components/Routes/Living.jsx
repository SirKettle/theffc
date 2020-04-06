import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import image1 from '../../assets/images/content/living/01.jpg';
import image2 from '../../assets/images/content/living/02.jpg';
import image3 from '../../assets/images/content/living/03.jpg';
import image4 from '../../assets/images/content/living/04.jpg';
import image5 from '../../assets/images/content/living/05.jpg';
import image6 from '../../assets/images/content/living/06.jpg';
import image7 from '../../assets/images/content/living/07.jpg';
import image8 from '../../assets/images/content/living/08.jpg';
import image9 from '../../assets/images/content/living/09.jpg';
import fallbackImage from '../../assets/images/content/living-fallback.jpg';

const columnsCopy = [
  `
# Fitted alcove cupboards, built-in bookcases and living room furniture for your Norfolk home, totally bespoke and completely unique
`,
  `
### Alcove Cupboards

![alt](${image1})

We specialise in alcove cupboards and fitted bookcases, our framed cabinetry is traditionally made and is made to look in keeping with your period house. The framework is totally scribed into the wall, meaning that you have no gaps, or filler strips.

![alt](${image2})


### Painted or Wooden

![alt](${image7})

Although painted living room furniture is more widespread, you might prefer to opt for a wood finish, timbers such as walnut and European Oak are the most popular here – providing lots of warmth and beauty to your room. We only ever use the best quality; prime grade and sap free, and finished with an ecologically sound lacquer.

![alt](${image8})

`,
  `
### Fitted TV Cupboards

If you have an awkward corner space, let us create a made to measure piece that fits the space exactly, and houses all your media underneath. You can source "magic eyes" to allow you to operate your devices even while the cupboard doors are closed.

![alt](${image9})


### Mouldings

![alt](${image3})

We can match any moulding to complement the unique features that your house has, for example you may want to match the moulding on your room doors to the mouldings on your door furniture.

![alt](${image4})

You may have a Georgian or Victorian house, and opt for a piece of furniture that reflects the style of your house. Georgian "raised and fielded" panels, Victorian "panel mouldings", plain "shaker" style doors.

![alt](${image5})

![alt](${image6})
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
  images: twitterSelectors.imageWithHashTagSelector('living')(state),
});

export default connect(mapStateToProps)(Living);
