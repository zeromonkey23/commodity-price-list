import React from 'react';

import type {ButtonProps} from './View.types';

const Button = (props: ButtonProps) => {
  const {children, className, disabled, onClick} = props;
  return (
    <button type="button" disabled={disabled} onClick={onClick}
      className={`py-2 px-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 
        border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ${className}
        disabled:bg-gray-200`}>
      {children}
    </button>
  );
};

export default Button;