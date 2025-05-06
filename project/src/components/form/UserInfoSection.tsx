import React from 'react';
import FormInput from '../ui/FormInput';
import { useFormContext } from '../../context/FormContext';

const UserInfoSection: React.FC = () => {
  const { formData, updateForm, errors, validateField } = useFormContext();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(e.target.name, e.target.value);
  };
  
  return (
    <div className="mb-6 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold mb-4">Datos de quien registra la actividad</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <FormInput
          id="nombre_apellido"
          name="nombre_apellido"
          value={formData.nombre_apellido}
          onChange={handleInputChange}
          onBlur={() => validateField('nombre_apellido')}
          label="Nombres y apellidos"
          required
          error={errors.nombre_apellido}
        />
        
        <FormInput
          id="mail"
          name="mail"
          type="email"
          value={formData.mail}
          onChange={handleInputChange}
          onBlur={() => validateField('mail')}
          label="Correo Electrónico"
          required
          error={errors.mail}
        />
        
        <div className="col-span-1 md:col-span-2">
          <FormInput
            id="institucion"
            name="institucion"
            value={formData.institucion || ''}
            onChange={handleInputChange}
            label="Institución / Organización (si aplica)"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;