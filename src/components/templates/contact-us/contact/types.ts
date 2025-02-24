export interface FormData {
  name: string;
  email: string;
  message: string;
  phoneNumber:string
}

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}
