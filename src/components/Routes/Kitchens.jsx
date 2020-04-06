import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { PageLayout } from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
// import * as site from '../../constants/site';
// import Blog from '../Blog/Blog';
// import * as site from '../../constants/site';
import kitchenImage1 from '../../assets/images/content/IMG_5320.jpg';
import kitchenImage2 from '../../assets/images/content/kitchen-methods.jpg';
import kitchenImage3 from '../../assets/images/content/kitchen-methods-chisel.jpg';
import kitchenImage4 from '../../assets/images/content/kitchen019.jpg';
import kitchenImage5 from '../../assets/images/content/IMG_4697.jpg';
import kitchenCopperImage from '../../assets/images/content/kitchen-copper.jpg';

// ![${site.name} animals](${logoAnimals})
const columnsCopy = [
  `
# Norfolks finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich
`,
  `
### Handmade worktops

![Handmade kitchen worktops](${kitchenImage1})

Never will our worktops be constructed from small strips laminated together (yuk). No, we prefer to have nice wide chunky planks a minimum of 6" (15cm) wide. Normally the planks are much wider being around 10" (25cm) so this brings out the beautiful character of the wood. Many customers are put off by timber worktops having had problems with staining in the past – this is due to the poor finishing of the timber. Unlike other companies, we don't use Danish Oil, Junckers Oil or any other kind of oil. Neither do we use artificial varnishes which look artificial and plastic. So what do we use? We’re Not telling ... we don’t want anyone else to find out.

### Finest drawers

![Hardwood kitchen cupboards and drawers](${kitchenImage4})

Our drawers are only ever made from hardwood (normally the same as the worktops) and always dovetailed together. Mounting them on the best German invisible soft closing runners creates a drawer that operate seamlessly and perfectly for a lifetime. We also can incorporate internal drawers. And as for chopping boards and cutlery divisions, other companies will charge you. We don't.
`,
  `
### Methods

Our doors are mortise and tenoned and hung on the finest heavy gauge polished chrome butt hinges. Our traditional kitchens are always “framed” and the cupboard itself leveled to the floor in the traditional way.

![Traditionally made kitchens](${kitchenImage2})

We avoid clip on plinths and our carcasing is always from thick material giving you a heavy solid cupboard which will stand the test of time. And in ten years time, you can repaint, and re-oil.

![Handcrafted bespoke kitchens and stunning handmade worktops](${kitchenImage3})

### Pull outs

Some companies use cheap copies, we use only the best (German again)

![German made kitchen pull outs](${kitchenImage5})
`,
];

const getImages = images => images.map(i => i.src).concat(kitchenCopperImage);

// {/*<Blog loadingContent={'### What have I been up to...?'} preContent={'### This is what I’ve been up to'} />*/}
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
  // images: twitterSelectors.imageSelector(state),
  images: twitterSelectors.imageWithHashTagSelector('kitchen')(state),
});

export default connect(mapStateToProps)(Kitchens);
