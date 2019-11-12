import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as twitterSelectors from '../../domains/twitter/twitterSelectors';
import bedroomImage1 from '../../assets/images/content/bedroom-1.jpg';
import bedroomImage2 from '../../assets/images/content/bedroom-2.jpg';
import bedroomImage3 from '../../assets/images/content/bedroom-3.jpg';
import bedroomImage4 from '../../assets/images/content/bedroom-4.jpg';
import bedroomImage5 from '../../assets/images/content/bedroom-5.jpg';
import bedroomImage6 from '../../assets/images/content/bedroom-6.jpg';
import bedroomImage7 from '../../assets/images/content/bedroom-7.jpg';

const columnsCopy = [
  `
# Fitted wardrobes and beautiful bedroom furniture all individually made for you in our Norfolk workshop
`,
  `
### Chunky is good

Only large section 32mm hanging rail is used alongside forged end sockets. And always polished chrome.

![Quality fitted wardrobes](${bedroomImage1})

### Carcassing

Unlike some national companies - we only use full carcassing. We don’t just fix end panels to walls and hang rail in-between.

![Custom made wardrobes](${bedroomImage2})

### Design details

We will knock the socks off the competition, because everything is handmade we are not limited in terms of the design whether traditional or modern

![Bespoke designed wardrobes](${bedroomImage3})

### Flexibilty

All shelving is on adjustable pegs – meaning you can add more shelves and move them to suit your requirements.

![Adjustable shelving in wardrobes](${bedroomImage4})
`,
  `
### Shoes

![Shoe storage solutions](${bedroomImage6})

We can accommodate them all. (Well - we were almost beaten once) And our lighting will Never be Fluorescent – Errrggghhh! We only use concealed LED lighting which is controlled via discreet infrared sensors illuminating all your lovely clothes.

### Internal Drawers

![Custom made wardrobes tailored to your home](${bedroomImage5})

Clients often ask for drawers – but so as not to ruin the aesthetics of the façade, we hide them away inside the cupboard. We have even put a kitchen inside a wardrobe before.

### Finish

![Traditional and contemporary wardrobes](${bedroomImage7})

We can make modern looking wardrobes utilizing choice veneers, and a slick clean design. Or traditional looking robes, with a sprayed finish onto paneled doors. Cladding parts of the doors in mirror is also popular. Our doors are normally hinged but you can choose to have them sliding if space is tight.

`,
];

function Bedroom({ images }) {
  return (
    <Layout hero={images && images[0] && images[0].src} heroCopy={columnsCopy[0]}>
      <Columns>
        <Content markdown={columnsCopy[1]} />
        <Content markdown={columnsCopy[2]} />
      </Columns>
    </Layout>
  );
}

const mapStateToProps = state => ({
  ...routeNodeSelector('')(state),
  images: twitterSelectors.imageWithHashTagSelector('bedroom')(state),
});

export default connect(mapStateToProps)(Bedroom);
