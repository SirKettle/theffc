import React  from 'react';

const BaseButton = ({
  className,
  dataRole,
  onClick,
  children,
  disabled
}) => {
  const handleClick = () => {
    return onClick(arguments);
  };

  return (
    <button
      className={className}
      data-role={dataRole}
      onClick={handleClick}
      disabled={disabled}
    >{children}</button>
  );
};

BaseButton.defaultProps = {
  className: 'base-button',
  onClick: () => {},
  disabled: false
};

export default BaseButton;
