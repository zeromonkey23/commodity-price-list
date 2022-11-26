export interface FormDropdownOption {
  label: string;
  value: string;
}

export interface FormSchema {
  [name: string] : {
    type: string,
    required?: boolean,
    options?: Array<Record<string, string>>
  }
}