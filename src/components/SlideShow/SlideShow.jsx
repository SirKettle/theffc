import React, { useEffect, useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import classnames from 'classnames';
import FixedRatioContainer from '../FixedRatioContainer/FixedRatioContainer';
import styles from './SlideShow.css';

const preloadImage = memoizeWith(identity, src => {
  const image = new Image();
  image.src = src;
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
const getNextIndex = (currentImageIndex, images) =>
  currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

function SlideShow({ images, className = null, displayTime = 2500, fadeTime = 1000, tick = 100 }) {
  const [timer, setTimer] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(getNextIndex(currentImageIndex, images));
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    images.forEach(preloadImage);
    setNextImageIndex(getNextIndex(currentImageIndex, images));
  }, [images.length]);

  useInterval(() => {
    if (images.length < 2) {
      return;
    }

    setTimer(timer + tick);

    if (timer >= displayTime - fadeTime && !transition) {
      // fade out current image revealing next image behind it
      setOpacity(0);
      setTransition(true);
      return;
    }

    if (timer >= displayTime + tick && transition) {
      // set new image
      // fade in
      setOpacity(1);
      // setTransition(false);
      // reset timer
      // setTimer(0);
      setCurrentImageIndex(nextImageIndex);
    }

    if (timer >= displayTime + fadeTime + tick + tick && transition) {
      // set new image
      // fade in
      // setOpacity(1);
      setTransition(false);
      // reset timer
      setTimer(0);
      setNextImageIndex(getNextIndex(currentImageIndex, images));
    }
  }, tick);

  return (
    <FixedRatioContainer width={9} height={5} className={classnames(styles.slideShow, className)}>
      <div className={styles.slides}>
        <div
          className={classnames(styles.image, styles.current)}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: `opacity ${fadeTime}ms ease-out`,
            opacity,
          }}
        />
        <div
          className={classnames(styles.image, styles.next)}
          style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
        />
      </div>
    </FixedRatioContainer>
  );
}

export default SlideShow;
//
// function SlideShow({
//   images,
//   className = null,
//   displayTime = 3500,
//   fadeTime = 1500
// }) {
//   const [imageIndex, setImageIndex] = useState(0);
//   const [opacity, setOpacity] = useState(1);
//   const [transition, setTransition] = useState(false);
//
//   const getNextIndex = () => imageIndex === images.length - 1 ? 0 : imageIndex + 1;
//
//   useEffect(() => {
//     images.forEach(preloadImage);
//     start();
//   }, [images.length]);
//
//   function start() {
//     if (images.length > 1) {
//       useTimeout(fadeSlide, displayTime);
//     }
//   }
//
//   function nextSlide() {
//     setImageIndex(getNextIndex());
//     setOpacity(1);
//     setTransition(false);
//     start();
//   }
//
//   function fadeSlide() {
//     setOpacity(0);
//     setTransition(true);
//     useTimeout(nextSlide, fadeTime);
//   }
//
//   const nextImageIndex = transition ? getNextIndex() : imageIndex;
//
//   return (
//     <FixedRatioContainer
//       width={9}
//       height={5}
//       className={classnames(styles.slideShow, className)}
//     >
//       <div className={styles.slides}>
//         <div
//           className={classnames(styles.image, styles.current)}
//           style={{
//             backgroundImage: `url(${images[imageIndex]})`,
//             transition: `opacity ${fadeTime}ms ease-out`,
//             opacity
//           }}
//         />
//         <div
//           className={classnames(styles.image, styles.next)}
//           style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
//         />
//       </div>
//     </FixedRatioContainer>
//   );
// }
//
// export default SlideShow;
