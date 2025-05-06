import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, ValidationErrors } from '../types';
import { validateForm } from '../utils/validation';

interface FormContextType {
  formData: FormData;
  errors: ValidationErrors;
  updateForm: (field: string, value: any) => void;
  validateField: (field: string) => boolean;
  validateAll: () => boolean;
  resetForm: () => void;
}

const initialFormData: FormData = {
  practica: [],
  tipo_actividad: [],
  nombre_actividad: '',
  nombre_artista: '',
  enlace_actividad: '',
  institucion_responsable: '',
  trata_de: '',
  tiempo_actividad: 'Disponible permanente',
  duracion: '10',
  nacionalidad: '',
  sitio_web: '',
  publico: 'Familiar',
  nombre_apellido: '',
  mail: '',
  dias: []
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const updateForm = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateField = (field: string): boolean => {
    const fieldErrors = validateForm({ ...formData });
    
    if (fieldErrors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field]
      }));
      return false;
    }
    
    // Borrar el error de este campo si se ha corregido
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    
    return true;
  };

  const validateAll = (): boolean => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        updateForm,
        validateField,
        validateAll,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};