import React, { useState } from 'react';

interface FileUploadProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  acceptedTypes?: string;
  onChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  name,
  label,
  required = false,
  error,
  acceptedTypes = 'image/*',
  onChange
}) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      onChange(files[0]);
    } else {
      setFileName('');
      onChange(null);
    }
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
      <div className="flex items-center">
        <label
          htmlFor={id}
          className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
        >
          Seleccionar archivo
        </label>
        <span className="ml-3 text-sm text-gray-500">{fileName || 'Ningún archivo seleccionado'}</span>
        <input
          type="file"
          id={id}
          name={name}
          onChange={handleFileChange}
          accept={acceptedTypes}
          className="sr-only"
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;