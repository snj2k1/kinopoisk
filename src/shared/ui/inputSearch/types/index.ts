import { UseFormSetValue } from 'react-hook-form';

type FormValues = {
  query: string;
};

export interface IInput {
  value: string;
  isError?: boolean;
  type?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  setValue: UseFormSetValue<FormValues>;
}
