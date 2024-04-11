export interface IPopOut {
  suggests: string[];
  isOpen: boolean;
  handleChange: (value: string) => void;
}
