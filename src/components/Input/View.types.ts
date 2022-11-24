import type {ChangeEvent} from 'react';

export interface InputProps {
  className?: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'number';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}