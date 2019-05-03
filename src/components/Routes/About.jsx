import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import imageDogKiss from '../../assets/images/claire_square_dog_kiss.jpg';
import heroImage from '../../assets/images/slides/claire_field_1.jpg';
import imageDoraClaire from '../../assets/images/claire_dora.jpg';
import imageHeads from '../../assets/images/heads.jpg';
import imageVan from '../../assets/images/van.jpg';
import logoAnimals from '../../assets/images/logo-animals_924x824.png';
import * as site from '../../constants/site';
import Blog from '../Blog/Blog';

const columnsCopy = [`
# About ${site.name}...
`, `
### Who is ${site.name}?

![Claire Buckels with Alfie and Dora](${imageHeads})

#### Claire Buckels:
- Partner and Mum of 2.
- Trustee and Fundraising Officer for The Beagle Welfare Charity (2014-18)
- The Beagle Welfare Charity, Area Officer for Nottingham for 10 years
- Passionate pet owner
- Experienced dog walker
- Canine behaviourist BCCSDip.AdvCanBhv

![Claire Buckels with Dora](${imageDoraClaire})
_A very young Claire!_

### Why choose ${site.name}?
- DBS checked
- Canine first aid trained
- Fully insured
- I hold a level 4 accredited advanced diploma in canine behaviour
- VW van fitted with automatic temperature control extraction to the rear and four bespoke, key lockable [Alpha Dog Cages](http://alphadogcages.co.uk) to provide cool, safe and secure transport

![The van](${imageVan})

### What is ${site.name}?
- Regular or occasional dog walking
- Small pet care
- Dog day care
- Garden breaks
- Pet taxi
- Puppy socialisation

![A dog kiss](${imageDogKiss})
_Claire with one of her pet dogs, Alfie._

### The brand holo-holo
- Hawaiian word, literally translating to ‘going for a walk/to go out for pleasure’
- When someone is going holo-holo, they’re adventuring for fun. It’s kind of like a journey without a destination
- My favourite thing to do, namesake and inspiration
- Memories of Hawaii incorporated with my love and passion for animal welfare

![${site.name} animals](${logoAnimals})

`];

function About() {
  return (
    <Layout
      hero={heroImage}
      heroCopy={columnsCopy[0]}
    >
      <Columns>
        <Content markdown={columnsCopy[1]} />
        <Blog
          loadingContent={'### What have I been up to...?'}
          preContent={'### This is what I’ve been up to'}
        />
      </Columns>
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(About);
