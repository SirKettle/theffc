import React from 'react';

import styled, { css } from 'styled-components';

const Centered = styled.div`
  ${({ isFlex = false, maxWidth = 1024 }) => {
    if (isFlex) {
      return css`
        flex: 0 1 ${maxWidth}px;
      `;
    }
    return css`
      width: ${maxWidth}px;
      max-width: 100%;
      margin: auto;
    `;
  }}
`;

export default Centered;

const PaddingContainer = styled.div`
  ${({ noPadding }) =>
    noPadding
      ? ''
      : css`
          padding: 0 ${({ theme }) => theme.gap * 1}px;

          @media (min-width: 600px) {
            padding: 0 ${({ theme }) => theme.gap * 3}px;
          }
        `}
`;

export const FixedWidthCentral = ({ children, className = '', noPadding = false, width = 1024 }) => (
  <PaddingContainer className={className} noPadding={noPadding}>
    <Centered maxWidth={width}>{children}</Centered>
  </PaddingContainer>
);
