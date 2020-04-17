import React, { useCallback } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import IconButton from '../IconButton';
import { Next, Pause, Play, Previous } from '../../assets/images/svg/media';

const Controls = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  color: white;
  justify-content: center;
`;

export const PlayButton = styled(IconButton)`
  margin: 30px;
  opacity: 0.4;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
`;

const MobileControls = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: stretch;
`;

const MobileButton = styled.button`
  flex: 0 0 50%;
  opacity: 0;
  outline: none;
  border: none;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.025);
`;

const ICON_SIZE = '50px';

export default React.memo(({ disabled, isPaused, onTogglePause, onClickPrevious, onClickNext }) => {
  const windowWidth = useWindowWidth();

  const handleClickPrevious = useCallback(() => {
    onClickPrevious();
    if (!isPaused) {
      onTogglePause();
    }
  }, []);

  const handleClickNext = useCallback(() => {
    onClickNext();
    if (!isPaused) {
      onTogglePause();
    }
  }, []);

  return windowWidth > 750 ? (
    <Controls>
      <PlayButton onClick={onTogglePause} width={ICON_SIZE} height={ICON_SIZE}>
        {isPaused ? <Play /> : <Pause />}
      </PlayButton>
      <PlayButton onClick={handleClickPrevious} width={ICON_SIZE} height={ICON_SIZE}>
        <Previous />
      </PlayButton>
      <PlayButton onClick={handleClickNext} width={ICON_SIZE} height={ICON_SIZE}>
        <Next />
      </PlayButton>
    </Controls>
  ) : (
    <MobileControls>
      <MobileButton disabled={disabled} onClick={handleClickPrevious}>
        Previous slide
      </MobileButton>
      <MobileButton disabled={disabled} onClick={handleClickNext}>
        Next slide
      </MobileButton>
    </MobileControls>
  );
});
