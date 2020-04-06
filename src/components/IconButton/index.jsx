import React from 'react';
import styled from 'styled-components';

const Styled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: block;
  color: inherit;
  padding: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: 0 0 ${({ width }) => width};

  > svg {
    height: 100%;
    width: 100%;
  }
`;

const IconButton = ({ className, dataRole, onClick, children, width = '30px', height = '30px', ...rest }) => {
  const handleClick = () => {
    return onClick(arguments);
  };

  return (
    <Styled className={className} data-role={dataRole} onClick={handleClick} {...rest} width={width} height={height}>
      {children}
    </Styled>
  );
};

IconButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default IconButton;
