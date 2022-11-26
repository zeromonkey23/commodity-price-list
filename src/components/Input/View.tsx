import React from 'react';

import noop from '../../helpers/noop';

import useView from './View.hooks';
import type {InputProps} from './View.types';

const Input = (props: InputProps) => {
  const {className, type = 'text', value, required = false, placeholder = '',  onChange, onEnter = noop} = props;
  const {onKeyPress} = useView({onEnter});
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyPress}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2 ${className}`} required={required}/>
  );
};

export default Input;