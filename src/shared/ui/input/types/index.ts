export interface IInput {
  value?: string;
  isError?: boolean;
  type?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
