import React, { useCallback, useEffect, useRef, useState } from 'react';
import { propOr } from 'ramda';
import styled, { css } from 'styled-components';
import * as site from '../../constants/site';

const SlideImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: ${({ height, width }) => `-${height * 0.5}px 0 0 -${width * 0.5}px`};

  ${({ isCurrent, opacity }) =>
    css`
      z-index: ${isCurrent ? 1 : 0};
      opacity: ${opacity};
    `}
`;

const getZoomScale = ({ width = 1, height = 1, containerWidth = 1, containerHeight = 1 }) => {
  const imageRatio = width / height;
  const containerRatio = containerWidth / containerHeight;
  return containerRatio > imageRatio ? containerWidth / width : containerHeight / height;
};

const Slide = ({
  src,
  opacity = 1,
  isCurrent = false,
  containerWidth,
  containerHeight,
  style,
  alt = `${site.name} - ${site.description}`,
}) => {
  const [height, setHeight] = useState(containerHeight);
  const [width, setWidth] = useState(containerWidth);
  const imgEl = useRef(null);

  const calcDimensions = () => {
    if (imgEl.current) {
      const { naturalWidth, naturalHeight } = imgEl.current;

      const imageHeight = propOr(height, 'naturalHeight')(imgEl.current);
      const imageWidth = propOr(width, 'naturalWidth')(imgEl.current);

      if (!imageWidth || !imageHeight) {
        return;
      }

      const scale = getZoomScale({ width: imageWidth, height: imageHeight, containerWidth, containerHeight });
      setHeight(Math.ceil(naturalHeight * scale));
      setWidth(Math.ceil(naturalWidth * scale));
    }
  };

  useEffect(() => {
    calcDimensions();
  }, [src, containerWidth, containerHeight]);

  const onImageLoad = useCallback(() => {
    calcDimensions();
  }, [src, containerWidth, containerHeight]);

  return (
    <SlideImage
      ref={imgEl}
      src={src}
      isCurrent={isCurrent}
      opacity={opacity}
      height={height}
      width={width}
      style={style}
      onLoad={onImageLoad}
      alt={alt}
    />
  );
};

export default React.memo(Slide);
