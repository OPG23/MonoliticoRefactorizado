import React from 'react';
import FormInput from '../ui/FormInput';
import { useFormContext } from '../../context/FormContext';

const AdditionalDetailsSection: React.FC = () => {
  const { formData, updateForm, errors, validateField } = useFormContext();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(e.target.name, e.target.value);
  };
  
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm('duracion', e.target.value);
  };
  
  return (
    <div className="mb-6 border-t border-gray-200 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duración de la actividad / evento en minutos
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-900 mb-1">
              {formData.duracion} minutos
            </div>
            <input
              type="range"
              id="duracion"
              name="duracion"
              min="10"
              max="180"
              step="10"
              value={formData.duracion}
              onChange={handleRangeChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <FormInput
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleInputChange}
            onBlur={() => validateField('nacionalidad')}
            label="Nacionalidad del artista o de la agrupación"
            required
            error={errors.nacionalidad}
          />
          
          <FormInput
            id="pais_transmision"
            name="pais_transmision"
            value={formData.pais_transmision || ''}
            onChange={handleInputChange}
            label="País sede de la institución desde donde se transmite la actividad o el evento"
          />
          
          <FormInput
            id="sitio_web"
            name="sitio_web"
            value={formData.sitio_web}
            onChange={handleInputChange}
            onBlur={() => validateField('sitio_web')}
            label="Web del artista / agrupación / institución"
            required
            error={errors.sitio_web}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes sociales</h3>
          
          <FormInput
            id="facebook"
            name="facebook"
            value={formData.facebook || ''}
            onChange={handleInputChange}
            label="Facebook"
          />
          
          <FormInput
            id="twitter"
            name="twitter"
            value={formData.twitter || ''}
            onChange={handleInputChange}
            label="Twitter"
          />
          
          <FormInput
            id="instagram"
            name="instagram"
            value={formData.instagram || ''}
            onChange={handleInputChange}
            label="Instagram"
          />
          
          <FormInput
            id="youtube"
            name="youtube"
            value={formData.youtube || ''}
            onChange={handleInputChange}
            label="YouTube"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailsSection;