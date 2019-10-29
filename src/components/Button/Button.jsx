import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({ className, dataRole, onClick, children, disabled }) => {
  const handleClick = () => {
    return onClick(arguments);
  };

  return (
    <StyledButton className={className} data-role={dataRole} onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
