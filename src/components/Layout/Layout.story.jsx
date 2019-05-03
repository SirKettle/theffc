import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs/* , text */ } from '@storybook/addon-knobs';
import Story from '../../storybook/story';
import storeDecorator from '../../storybook/decorators/storeDecorator';
import Layout from './Layout';
import Sections from '../Sections/Sections';
import * as site from '../../constants/site';
// import * as site from '../../constants/site';
import imageClaireMountain from '../../assets/images/claire_mountain.jpg';
import imageRabbit from '../../assets/images/services/rabbit-hutch.jpg';
import imageBlackDog from '../../assets/images/services/black_dog_square.jpg';

const copy = `
# Services

## ${site.name} primarily focuses on providing dog walks and day care.

### However, I also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`;

const sections = [{
  image: imageClaireMountain,
  title: 'Garden break',
  details: 'For dogs who for some reason don’t need walking but just need a garden break and a little company ',
  tag: 'Text update provided',
  label: '30 minutes £8'
}, {
  image: imageClaireMountain,
  title: 'Pet taxi',
  details: 'I’ll transport your pet to the vet or to any other destination for you and save you the anxieties ',
  tag: 'Text update provided',
  label: 'Duration varies £8 per 30 minutes'
}, {
  image: imageBlackDog,
  title: 'Dog day care',
  details: 'Your dog can spend the day with me in our home while you’re at work etc. this will include walks, play, feeding and lots of human and canine company',
  tag: 'Text update provided',
  label: '£20'
}, {
  image: imageClaireMountain,
  title: 'Puppy socialisation time',
  details: 'Having studied canine behaviour, I understand the importance of socialisation from a young age and the impact the lack of it can have on a dogs future behaviour. If you’re too busy, I can introduce them to everyday stimuli. Traffic, dog groups, children etc and work on basic training',
  tag: 'Text update provided',
  label: '£8 per 30 minutes'
}, {
  image: imageClaireMountain,
  title: 'Cat sitting ',
  details: 'I will visit your cat whilst you’re at work or away on holiday, avoiding the need for a cattery.  I provide lots of love and cuddles, feed, water and clean litter trays',
  tag: 'Text update provided',
  label: '15 minutes £6, £10 for two daily visits'
}, {
  image: imageRabbit,
  title: 'Small pet care',
  details: 'I will feed and water your animal, play and clean cages/bedding. All animals catered for, big or small',
  tag: 'Text update provided',
  label: '15 minutes £6, £10 for two daily visits'
}, {
  image: imageClaireMountain,
  title: '30 minute walk',
  details: '30 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  tag: 'Text update provided',
  label: '30 minutes £8, £4 per additional dog. Additional cost if by themselves'

}, {
  image: imageClaireMountain,
  title: '60 minutes walk',
  details: '60 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  tag: 'Text update provided',
  label: '60 minutes £10, £5 per additional dog. Additional cost if by themselves'
}];

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(storeDecorator)
  .add('Main layout', () => (
    <Story
      title="Layout"
      summary="The main layout of the website"
    >
      <Layout
        hero={imageClaireMountain}
        heroCopy={copy}
      >
        <Sections sections={sections} />
      </Layout>
    </Story>
  ));
