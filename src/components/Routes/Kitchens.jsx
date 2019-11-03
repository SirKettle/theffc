import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
// import * as site from '../../constants/site';
import Blog from '../Blog/Blog';

// ![${site.name} animals](${logoAnimals})
const columnsCopy = [
  `
# Norfolks finest bespoke kitchens and stunning handmade worktops, handcrafted in Norwich

## Handcrafted bespoke kitchens and stunning handmade worktops
`,
  `
### Handmade worktops

Never will our worktops be constructed from small strips laminated together (yuk) No, we prefer to have nice wide chunky planks a minimum of 6" (15cm) wide. Normally the planks are much wider being around 10" (25cm) so this brings out the beautiful character of the wood. Many customers are put off by timber worktops having had problems with staining in the past – this is due to the poor finishing of the timber. Unlike other companies, we don't use Danish Oil, Junckers Oil or any other kind of oil. Neither do we use artificial varnishes which look artificial and plastic. So what do we use ? We’re Not telling ... we don’t want anyone else to find out.

### Methods

Our doors are mortise and tenoned and hung on the finest heavy gauge polished chrome butt hinges. Our traditional kitchens are always “framed” and the cupboard itself leveled to the floor in the traditional way.

We avoid clip on plinths and our carcasing is always from thick material giving you a heavy solid cupboard which will stand the test of time. And in ten years time, you can repaint, and re-oil.
`,
];

function Kitchens({ images }) {
  return (
    <Layout hero={images && images[0] && images[0].src} heroCopy={columnsCopy[0]}>
      <Columns>
        <Content markdown={columnsCopy[1]} />
        <Blog loadingContent={'### What have I been up to...?'} preContent={'### This is what I’ve been up to'} />
      </Columns>
    </Layout>
  );
}

const mapStateToProps = state => ({
  ...routeNodeSelector('')(state),
  images: twitterSelectors.imageSelector(state),
  // images: twitterSelectors.imageWithHashTagSelector('kitchen')(state)
});

export default connect(mapStateToProps)(Kitchens);
