import React  from 'react';
import BaseButton from './BaseButton';

const Button = ({
  className,
  dataRole,
  onClick,
  children
}) => {
  return (
    <BaseButton
      className={className}
      dataRole={dataRole}
      onClick={onClick}
    >{children}</BaseButton>
  );
};
Button.defaultProps = {
  className: 'some-button',
  dataRole: 'button',
  onClick: () => {}
};

export default Button;
