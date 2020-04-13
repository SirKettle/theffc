import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import kitchenCopperImage from '../../assets/images/content/kitchen-copper.jpg';
import imageTimber from '../../assets/images/content/kitchen_timber.jpg';
import imageDrawers1 from '../../assets/images/content/kitchen_drawers1.jpg';
import imageDrawers2 from '../../assets/images/content/kitchen_drawers2.jpg';
import imageWooden from '../../assets/images/content/kitchen_wooden.jpg';
import imageBespoke from '../../assets/images/content/kitchen_bespoke.jpg';

const columnsCopy = [
  `
# Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich
`,
  `
### Natural Timber

![Natural Timber - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${imageTimber})

Be assured that your kitchen is made from prime grade American Ash, you can see the grain through the painted finish giving depth and beauty to the finish. Your Shaker doors are hung on premium quality German hinges with soft close.

### The finest drawers

![The finest drawers - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${imageDrawers1})

Our drawers are only ever made from hardwood (normally the same as the worktops) and always dovetailed together. Mounting them on the finest 60 kg concealed soft closing runners creates a drawer that operate seamlessly and perfectly for a lifetime. We also can incorporate internal drawers behind a cupboard door.

![The finest drawers - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${imageDrawers2})
`,
  `
### Wood or Stone?

We make our own wooden worktops in house, this allows us to carefully select the straightest and most stable planks. We like to use wide boards, to show off the beauty of the grain and figure and then finish them in an extremely hardwearing polyurethane-oil mixture, specially formulated for us. Choose from Oak, Ash, Walnut and Iroko, or whatever FSC certified timber takes your fancy.

![Wood or Stone? - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${imageWooden})

### 100% Bespoke

Operating out of our own joinery workshop means we make everything in house, this gives us the freedom to plan your kitchen with the perfect design solution. We are not limited by standard “bought in sizes” and we can also give you as many options as you need for interiors and finishes, there is nothing we cannot make !

![100% Bespoke - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${imageBespoke})

### The finish

Our environmentally friendly water based paint and lacquer system offers an incredible finish, and can be made up in any colour or sheen level.

![The finish - Norfolk’s finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich](${kitchenCopperImage})
`,
];

const getImages = images => images.map(i => i.src).concat(kitchenCopperImage);

function Kitchens({ images }) {
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
  images: twitterSelectors.imageWithHashTagSelector('kitchen')(state),
});

export default connect(mapStateToProps)(Kitchens);
