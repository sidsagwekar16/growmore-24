export interface FormData {
  name: string;
  email: string;
  message: string;
  phoneNumber:int;
  countryCode: string; // add this

}

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}
