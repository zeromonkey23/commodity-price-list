import React from 'react';

import type {InputProps} from './View.types';

const Input = (props: InputProps) => {
  const {className} = props;
  return (
    <input {...props}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2 ${className}`}/>
  );
};

export default Input;