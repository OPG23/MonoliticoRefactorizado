import React from 'react';
import RadioButton from '../ui/RadioButton';
import FormInput from '../ui/FormInput';
import { useFormContext } from '../../context/FormContext';

const PublicSection: React.FC = () => {
  const { formData, updateForm, errors } = useFormContext();
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm('publico', e.target.value);
    
    // Borrar el valor «otro» si no está seleccionado
    if (e.target.value !== 'Otro') {
      updateForm('publico2', '');
    }
  };
  
  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm('publico2', e.target.value);
  };
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Público
        <span className="text-red-500 ml-1">*</span>
      </h3>
      {errors.publico && (
        <p className="text-red-500 text-sm mb-2">{errors.publico}</p>
      )}
      
      <RadioButton
        id="Familiar"
        name="publico"
        value="Familiar"
        checked={formData.publico === 'Familiar'}
        onChange={handleRadioChange}
        label="Familiar"
      />
      
      <RadioButton
        id="Adultos"
        name="publico"
        value="Adultos"
        checked={formData.publico === 'Adultos'}
        onChange={handleRadioChange}
        label="Adultos"
      />
      
      <div className="flex items-center">
        <RadioButton
          id="otro2"
          name="publico"
          value="Otro"
          checked={formData.publico === 'Otro'}
          onChange={handleRadioChange}
          label="Otro"
        />
        
        {formData.publico === 'Otro' && (
          <div className="ml-4 w-64">
            <FormInput
              id="cual2"
              name="publico2"
              value={formData.publico2 || ''}
              onChange={handleOtherChange}
              placeholder="Separe con punto y coma(;)"
              label=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicSection;