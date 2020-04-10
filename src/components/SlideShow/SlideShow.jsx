import React, { useEffect, useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import styled, { css } from 'styled-components';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';
import FixedRatioContainer from '../FixedRatioContainer/FixedRatioContainer';

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

const SlidesContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;

  ${({ isCurrent, opacity = 1 }) =>
    css`
      z-index: ${isCurrent ? 1 : 0};
      opacity: ${opacity};
    `}
`;

function SlideShow({
  images,
  className = null,
  displayTime = 6000,
  fadeTime = 1500,
  tick = 100,
  width = 9,
  height = 5,
  flexible = true,
}) {
  const [timer, setTimer] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(getNextIndex(currentImageIndex, images));
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState(false);
  const windowWidth = useWindowWidth(window.width);
  const windowHeight = useWindowHeight(window.height);

  const adjustedWidth = flexible ? windowWidth : width;
  const adjustedHeight = flexible ? Math.max(windowHeight * 0.5, windowWidth * 0.45) : height;

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
    <FixedRatioContainer width={adjustedWidth} height={adjustedHeight} className={className}>
      <SlidesContainer>
        <Slide
          isCurrent
          opacity={opacity}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: `opacity ${fadeTime}ms ease-out`,
          }}
        />
        <Slide
          style={{
            backgroundImage: `url(${images[nextImageIndex]})`,
          }}
        />
      </SlidesContainer>
    </FixedRatioContainer>
  );
}

export default SlideShow;
