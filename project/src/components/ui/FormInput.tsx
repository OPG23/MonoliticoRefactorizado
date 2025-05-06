import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  min?: string;
  max?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type = 'text',
  value,
  label,
  placeholder,
  required = false,
  error,
  onChange,
  onBlur,
  min,
  max
}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full p-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;