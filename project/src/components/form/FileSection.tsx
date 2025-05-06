import React from 'react';
import FileUpload from '../ui/FileUpload';
import { useFormContext } from '../../context/FormContext';

const FileSection: React.FC = () => {
  const { updateForm, errors } = useFormContext();
  
  const handleFileChange = (file: File | null) => {
    updateForm('subir_archivo', file || undefined);
  };
  
  return (
    <div className="mb-6">
      <FileUpload
        id="subir_archivo"
        name="subir_archivo"
        label="Imagen para promocionar la actividad"
        required
        error={errors.subir_archivo}
        onChange={handleFileChange}
        acceptedTypes="image/*"
      />
    </div>
  );
};

export default FileSection;