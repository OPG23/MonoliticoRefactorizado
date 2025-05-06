import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  value,
  checked = false,
  label,
  onChange
}) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;