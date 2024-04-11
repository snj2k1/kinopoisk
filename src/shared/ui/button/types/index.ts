type ButtonTypes = 'submit' | 'button' | 'reset' | undefined;

export interface IButtonProps {
  children: string;
  onClick?: () => void;
  type?: ButtonTypes;
}
