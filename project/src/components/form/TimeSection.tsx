import React from 'react';
import RadioButton from '../ui/RadioButton';
import FormInput from '../ui/FormInput';
import Checkbox from '../ui/Checkbox';
import { useFormContext } from '../../context/FormContext';

const TimeSection: React.FC = () => {
  const { formData, updateForm, errors } = useFormContext();
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm('tiempo_actividad', e.target.value);
    
    
    // Restablecer campos en función de la selección
    if (e.target.value === 'Disponible permanente') {
      updateForm('desde', '');
      updateForm('tdesde', '');
      updateForm('hasta', '');
      updateForm('thasta', '');
      updateForm('dias', []);
      updateForm('fecha_actividad_inscripcion', '');
      updateForm('tfecha_actividad_inscripcion', '');
      updateForm('correo_inscripcion', '');
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(e.target.name, e.target.value);
  };
  
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    let newDays = [...(formData.dias || [])];
    
    if (checked) {
      newDays.push(value);
    } else {
      newDays = newDays.filter(day => day !== value);
    }
    
    updateForm('dias', newDays);
  };
  
  const showDateRange = formData.tiempo_actividad === 'En un rango de tiempo específico';
  const showRegistration = formData.tiempo_actividad === 'Con previa inscripción';
  
  return (
    <div className="mb-6 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold mb-4">¿Cuándo estará disponible la actividad?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <RadioButton
          id="Disponible_permanente"
          name="tiempo_actividad"
          value="Disponible permanente"
          checked={formData.tiempo_actividad === 'Disponible permanente'}
          onChange={handleRadioChange}
          label="Disponible permanente"
        />
        
        <RadioButton
          id="En_rango_tiempo"
          name="tiempo_actividad"
          value="En un rango de tiempo específico"
          checked={formData.tiempo_actividad === 'En un rango de tiempo específico'}
          onChange={handleRadioChange}
          label="En un rango de tiempo específico"
        />
        
        <RadioButton
          id="Con_previa_inscripción"
          name="tiempo_actividad"
          value="Con previa inscripción"
          checked={formData.tiempo_actividad === 'Con previa inscripción'}
          onChange={handleRadioChange}
          label="Con previa inscripción"
        />
      </div>
      
      {showDateRange && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <FormInput
              id="desde"
              name="desde"
              type="date"
              value={formData.desde || ''}
              onChange={handleInputChange}
              label="Fecha inicial"
              required
              error={errors.desde}
            />
            
            <FormInput
              id="tdesde"
              name="tdesde"
              type="time"
              value={formData.tdesde || ''}
              onChange={handleInputChange}
              label="Hora inicial"
              required
              error={errors.tdesde}
            />
          </div>
          
          <div>
            <FormInput
              id="hasta"
              name="hasta"
              type="date"
              value={formData.hasta || ''}
              min={formData.desde}
              onChange={handleInputChange}
              label="Fecha final"
              required
              error={errors.hasta}
            />
            
            <FormInput
              id="thasta"
              name="thasta"
              type="time"
              value={formData.thasta || ''}
              onChange={handleInputChange}
              label="Hora final"
              required
              error={errors.thasta}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              En estos días
              <span className="text-red-500 ml-1">*</span>
            </label>
            {errors.dias && <p className="text-red-500 text-sm mb-2">{errors.dias}</p>}
            
            <Checkbox
              id="Lunes"
              name="dias[]"
              value="Lunes"
              checked={(formData.dias || []).includes('Lunes')}
              onChange={handleDayChange}
              label="Lunes"
            />
            
            <Checkbox
              id="Martes"
              name="dias[]"
              value="Martes"
              checked={(formData.dias || []).includes('Martes')}
              onChange={handleDayChange}
              label="Martes"
            />
            
            <Checkbox
              id="Miércoles"
              name="dias[]"
              value="Miércoles"
              checked={(formData.dias || []).includes('Miércoles')}
              onChange={handleDayChange}
              label="Miércoles"
            />
            
            <Checkbox
              id="Jueves"
              name="dias[]"
              value="Jueves"
              checked={(formData.dias || []).includes('Jueves')}
              onChange={handleDayChange}
              label="Jueves"
            />
            
            <Checkbox
              id="Viernes"
              name="dias[]"
              value="Viernes"
              checked={(formData.dias || []).includes('Viernes')}
              onChange={handleDayChange}
              label="Viernes"
            />
            
            <Checkbox
              id="Sábado"
              name="dias[]"
              value="Sábado"
              checked={(formData.dias || []).includes('Sábado')}
              onChange={handleDayChange}
              label="Sábado"
            />
            
            <Checkbox
              id="Domingo"
              name="dias[]"
              value="Domingo"
              checked={(formData.dias || []).includes('Domingo')}
              onChange={handleDayChange}
              label="Domingo"
            />
          </div>
        </div>
      )}
      
      {showRegistration && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FormInput
              id="fecha_actividad_inscripcion"
              name="fecha_actividad_inscripcion"
              type="date"
              value={formData.fecha_actividad_inscripcion || ''}
              onChange={handleInputChange}
              label="Fecha de la actividad"
              required
              error={errors.fecha_actividad_inscripcion}
            />
            
            <FormInput
              id="tfecha_actividad_inscripcion"
              name="tfecha_actividad_inscripcion"
              type="time"
              value={formData.tfecha_actividad_inscripcion || ''}
              onChange={handleInputChange}
              label="Hora de la actividad"
              required
              error={errors.tfecha_actividad_inscripcion}
            />
          </div>
          
          <div>
            <FormInput
              id="correo_inscripcion"
              name="correo_inscripcion"
              value={formData.correo_inscripcion || ''}
              onChange={handleInputChange}
              label="Url, correo o teléfono de inscripción"
              required
              error={errors.correo_inscripcion}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSection;