import React, { useState } from 'react';

interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  maxLength?: number;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  label,
  placeholder,
  required = false,
  error,
  maxLength,
  rows = 4,
  onChange,
  onBlur
}) => {
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    onChange(e);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full p-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {maxLength && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {charCount}/{maxLength} caracteres
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;