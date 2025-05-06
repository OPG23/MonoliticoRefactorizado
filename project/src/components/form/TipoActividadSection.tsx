import React from 'react';
import Checkbox from '../ui/Checkbox';
import { useFormContext } from '../../context/FormContext';

const TipoActividadSection: React.FC = () => {
  const { formData, updateForm, errors } = useFormContext();
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    let newTipos = [...formData.tipo_actividad];
    
    if (checked) {
      newTipos.push(value);
    } else {
      newTipos = newTipos.filter(item => item !== value);
    }
    
    updateForm('tipo_actividad', newTipos);
  };
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Tipo de actividad
        <span className="text-red-500 ml-1">*</span>
      </h3>
      {errors.tipo_actividad && (
        <p className="text-red-500 text-sm mb-2">{errors.tipo_actividad}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Checkbox
          id="tipo_actividad1"
          name="tipo_actividad[]"
          value="Formación"
          checked={formData.tipo_actividad.includes('Formación')}
          onChange={handleCheckboxChange}
          label="Formación"
        />
        
        <Checkbox
          id="tipo_actividad2"
          name="tipo_actividad[]"
          value="Circulación"
          checked={formData.tipo_actividad.includes('Circulación')}
          onChange={handleCheckboxChange}
          label="Circulación"
        />
        
        <Checkbox
          id="tipo_actividad3"
          name="tipo_actividad[]"
          value="Convocatoria"
          checked={formData.tipo_actividad.includes('Convocatoria')}
          onChange={handleCheckboxChange}
          label="Convocatoria"
        />
        
        <Checkbox
          id="tipo_actividad4"
          name="tipo_actividad[]"
          value="Investigación"
          checked={formData.tipo_actividad.includes('Investigación')}
          onChange={handleCheckboxChange}
          label="Investigación"
        />
      </div>
    </div>
  );
};

export default TipoActividadSection;