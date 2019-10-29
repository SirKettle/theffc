import styled, { css } from 'styled-components';

const Centered = styled.div`
  ${({ isFlex = false, width = 1024 }) => {
    if (isFlex) {
      return css`
        flex: 0 1 ${width}px;
      `;
    }
    return css`
      width: ${width}px;
      max-width: 100%;
      margin: auto;
    `;
  }}
`;

export default Centered;
