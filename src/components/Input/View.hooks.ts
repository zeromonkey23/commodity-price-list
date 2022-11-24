import type {ChangeEvent} from 'react';
import { useState} from 'react';

const useView = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    value && setValue(value);
  };

  return {value, onChange};
};

export default useView;