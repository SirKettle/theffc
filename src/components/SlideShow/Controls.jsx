import React from 'react';
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
  opacity: 0.2;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.5;
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
  flex: 1 1 auto;
  opacity: 0;
  outline: none;
  border: none;
  margin: 0;
  background: none;
`;

export default React.memo(({ disabled, isPaused, onTogglePause, onClickPrevious, onClickNext }) => {
  const windowWidth = useWindowWidth();

  return windowWidth > 750 ? (
    <Controls>
      <PlayButton onClick={onTogglePause}>{isPaused ? <Play /> : <Pause />}</PlayButton>
      <PlayButton onClick={onClickPrevious}>
        <Previous />
      </PlayButton>
      <PlayButton onClick={onClickNext}>
        <Next />
      </PlayButton>
    </Controls>
  ) : (
    <MobileControls>
      <MobileButton
        disabled={disabled}
        onClick={() => {
          onClickPrevious();
          if (!isPaused) {
            onTogglePause();
          }
          return false;
        }}
      >
        Prev
      </MobileButton>
      <MobileButton
        disabled={disabled}
        onClick={() => {
          onClickNext();
          if (!isPaused) {
            onTogglePause();
          }
          return false;
        }}
      >
        Next
      </MobileButton>
    </MobileControls>
  );
});
