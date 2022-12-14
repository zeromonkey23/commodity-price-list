import type {KeyboardEvent} from 'react';

import type {InputHooksProps} from './View.types';

const useView = ({onEnter}: InputHooksProps) => {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };

  return {onKeyPress};
};

export default useView;