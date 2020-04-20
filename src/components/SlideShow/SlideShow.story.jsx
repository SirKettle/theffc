import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs /* , text */ } from '@storybook/addon-knobs';
import Story from '../../storybook/story';
import styles from '../../storybook/story.css';
import SlideShow from './SlideShow';
import image1 from '../../assets/images/content/bedroom-fallback.jpg';
import image2 from '../../assets/images/content/living-fallback.jpg';

const images = [image1, image2];

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('SlideShow', () => (
    <Story title="Slideshow" summary="A selection of images fading between each other">
      <div className={styles.padded}>
        <SlideShow images={images} />
      </div>
    </Story>
  ));
