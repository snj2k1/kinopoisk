type DataType = {
  id: number;
  value: number | string;
  text?: string;
};

export interface IFilterSelector {
  type?: 'select' | 'input';
  value: string;
  handleChange: (newValue: string) => void;
  label: string;
  data?: DataType[];
  placeholder?: string;
}
