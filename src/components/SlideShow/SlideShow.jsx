import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import styled from 'styled-components';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';
import FixedRatioContainer from '../FixedRatioContainer/FixedRatioContainer';
import Slide from './Slide';
import Controls from './Controls';

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
const getNextIndex = (currentIndex, arr) => (currentIndex === arr.length - 1 ? 0 : currentIndex + 1);

const getPreviousIndex = (currentIndex, arr) => (currentIndex === 0 ? arr.length - 1 : currentIndex - 1);

const SlidesContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

// 1. start transition and fade out (revealing next image behind it)
// 2. after fade out: switch z-index - so back becomes front image
// 3. set new back image
// 4. new back image now needs to fade in instantly
// 5. end transition
const TRANSITION = {
  START: 'START',
  FADE_OUT_FRONT_IMAGE: 'FADE_OUT_FRONT_IMAGE',
  SWITCH_Z_INDEX: 'SWITCH_Z_INDEX', // after fade transition - switch the z-index (front switches with back)
  REMOVE_TRANSITION_TIME_ON_BACK_IMAGE: 'REMOVE_TRANSITION_TIME_ON_BACK_IMAGE',
  UPDATE_BACK_IMAGE_SRC: 'UPDATE_BACK_IMAGE_SRC', // also set opacity to 1 INSTANTLY
};

const USER_ACTION = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
};

function SlideShow({
  images,
  className = null,
  displayTime = 6000,
  fadeTime = 1500,
  userActionFadeTime = 150,
  tick = 33,
  width = 9,
  height = 5,
  flexible = true,
}) {
  const [timer, setTimer] = useState(0);
  const [imageIndexA, setImageIndexA] = useState(0);
  const [imageIndexB, setImageIndexB] = useState(getNextIndex(imageIndexA, images));
  const [currentSlide, setCurrentSlide] = useState('A');
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState(false);

  const [paused, setPaused] = useState(false);

  const [userAction, setUserAction] = useState(null);

  const windowWidth = useWindowWidth(window.width);
  const windowHeight = useWindowHeight(window.height);

  const adjustedWidth = flexible ? windowWidth : width;
  const adjustedHeight = flexible ? Math.max(windowHeight * 0.5, windowWidth * 0.45) : height;

  const adjFadeTime = useMemo(() => (userAction ? userActionFadeTime : fadeTime), [
    userActionFadeTime,
    fadeTime,
    userAction,
  ]);

  const currentIndex = useMemo(() => (currentSlide === 'A' ? imageIndexA : imageIndexB), [
    currentSlide,
    imageIndexA,
    imageIndexB,
  ]);

  const updateBackImage = useCallback(
    (isNext = true) => {
      const getIndexFunc = isNext ? getNextIndex : getPreviousIndex;
      if (currentSlide === 'A') {
        setImageIndexB(getIndexFunc(currentIndex, images));
      } else {
        setImageIndexA(getIndexFunc(currentIndex, images));
      }
    },
    [currentSlide, currentIndex, images],
  );

  useEffect(() => {
    images.forEach(preloadImage);
    updateBackImage();
  }, [images.length]);

  useInterval(() => {
    if (images.length < 2) {
      return;
    }

    if (!transition && paused && !userAction) {
      return;
    }

    const timeForNewImage = displayTime - adjFadeTime;
    const timeAfterFade = displayTime + tick;

    setTimer(userAction && !transition ? timeForNewImage : timer + tick);

    if (transition === TRANSITION.UPDATE_BACK_IMAGE_SRC) {
      // 5. end transition
      setTransition(null);
      // reset timer and actions
      setTimer(0);
      setUserAction(null);
      return;
    }

    if (transition === TRANSITION.SWITCH_Z_INDEX) {
      setTransition(TRANSITION.UPDATE_BACK_IMAGE_SRC);
      // 4. update the back image with new src
      updateBackImage();
      setOpacity(1);
      return;
    }

    if (timer >= timeAfterFade && transition === TRANSITION.FADE_OUT_FRONT_IMAGE) {
      setTransition(TRANSITION.SWITCH_Z_INDEX);
      // 3. after fade out: switch z-index - so back becomes front image
      setCurrentSlide(currentSlide === 'A' ? 'B' : 'A');
      return;
    }

    if (transition === TRANSITION.START) {
      setTransition(TRANSITION.FADE_OUT_FRONT_IMAGE);
      // 2. fade out the front image
      setOpacity(0);
      return;
    }

    if (timer >= timeForNewImage && !transition) {
      // 1. start transition
      setTransition(TRANSITION.START);
      if (userAction === USER_ACTION.PREVIOUS) {
        // if previous button clicked - make the prev image the next one!
        updateBackImage(false);
      }
    }
  }, tick);

  const handleNextClicked = useCallback((isNext = true) => {
    setUserAction(isNext ? USER_ACTION.NEXT : USER_ACTION.PREVIOUS);
  }, []);

  const transitionDurationMs =
    transition === TRANSITION.START ||
    transition === TRANSITION.FADE_OUT_FRONT_IMAGE ||
    transition === TRANSITION.SWITCH_Z_INDEX
      ? adjFadeTime
      : 0;

  const transitionOpacity =
    transition === TRANSITION.START || transition === TRANSITION.FADE_OUT_FRONT_IMAGE ? opacity : 1;

  return (
    <FixedRatioContainer width={adjustedWidth} height={adjustedHeight} className={className}>
      <SlidesContainer>
        <Controls
          isPaused={paused}
          disabled={!!transition}
          onTogglePause={() => setPaused(!paused)}
          onClickPrevious={() => handleNextClicked(false)}
          onClickNext={handleNextClicked}
          currentIndex={currentIndex}
          count={images.length}
        />
        <Slide
          containerHeight={adjustedHeight}
          containerWidth={adjustedWidth}
          isCurrent={currentSlide === 'A'}
          opacity={currentSlide === 'A' ? transitionOpacity : 1}
          src={images[imageIndexA]}
          transitionDurationMs={transitionDurationMs}
        />
        <Slide
          containerHeight={adjustedHeight}
          containerWidth={adjustedWidth}
          isCurrent={currentSlide === 'B'}
          opacity={currentSlide === 'B' ? transitionOpacity : 1}
          src={images[imageIndexB]}
          transitionDurationMs={transitionDurationMs}
        />
      </SlidesContainer>
    </FixedRatioContainer>
  );
}

export default React.memo(SlideShow);
