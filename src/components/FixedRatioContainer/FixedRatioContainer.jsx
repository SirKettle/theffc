import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 0;
  overflow: ${({ overflow }) => overflow};
  position: relative;
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FixedRatioContainer = ({ className, width, height, children, overflow = 'hidden' }) => (
  <Wrapper overflow={overflow} className={className} style={{ paddingTop: `${(height / width) * 100}%` }}>
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
);

FixedRatioContainer.defaultProps = {
  className: null,
  image: null,
  tag: null,
  label: null,
};

export default FixedRatioContainer;
