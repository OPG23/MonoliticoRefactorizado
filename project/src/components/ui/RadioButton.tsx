import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  onClick
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
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

export default RadioButton;