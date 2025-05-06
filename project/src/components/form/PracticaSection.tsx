import React from 'react';
import Checkbox from '../ui/Checkbox';
import FormInput from '../ui/FormInput';
import { useFormContext } from '../../context/FormContext';

const PracticaSection: React.FC = () => {
  const { formData, updateForm, errors, validateField } = useFormContext();
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    let newPracticas = [...formData.practica];
    
    if (checked) {
      newPracticas.push(value);
    } else {
      newPracticas = newPracticas.filter(item => item !== value);
    }
    
    updateForm('practica', newPracticas);
  };
  
  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm('practica12', e.target.value);
  };
  
  const isOtherChecked = formData.practica.includes('Otro');
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Práctica cultural, artística o recreativa
        <span className="text-red-500 ml-1">*</span>
      </h3>
      {errors.practica && (
        <p className="text-red-500 text-sm mb-2">{errors.practica}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Checkbox
          id="practica1"
          name="practica[]"
          value="Artes plásticas y visuales"
          checked={formData.practica.includes('Artes plásticas y visuales')}
          onChange={handleCheckboxChange}
          label="Artes plásticas y visuales"
        />
        
        <Checkbox
          id="practica2"
          name="practica[]"
          value="Danza"
          checked={formData.practica.includes('Danza')}
          onChange={handleCheckboxChange}
          label="Danza"
        />
        
        <Checkbox
          id="practica3"
          name="practica[]"
          value="Literatura"
          checked={formData.practica.includes('Literatura')}
          onChange={handleCheckboxChange}
          label="Literatura"
        />
        
        <Checkbox
          id="practica4"
          name="practica[]"
          value="Música"
          checked={formData.practica.includes('Música')}
          onChange={handleCheckboxChange}
          label="Música"
        />
        
        <Checkbox
          id="practica5"
          name="practica[]"
          value="Arte dramático"
          checked={formData.practica.includes('Arte dramático')}
          onChange={handleCheckboxChange}
          label="Arte dramático"
        />
        
        <Checkbox
          id="practica6"
          name="practica[]"
          value="Audiovisuales"
          checked={formData.practica.includes('Audiovisuales')}
          onChange={handleCheckboxChange}
          label="Audiovisuales"
        />
        
        <Checkbox
          id="practica7"
          name="practica[]"
          value="Gastronomía"
          checked={formData.practica.includes('Gastronomía')}
          onChange={handleCheckboxChange}
          label="Gastronomía"
        />
        
        <Checkbox
          id="practica8"
          name="practica[]"
          value="Diseño"
          checked={formData.practica.includes('Diseño')}
          onChange={handleCheckboxChange}
          label="Diseño"
        />
        
        <Checkbox
          id="practica9"
          name="practica[]"
          value="Manualidades/artesanías"
          checked={formData.practica.includes('Manualidades/artesanías')}
          onChange={handleCheckboxChange}
          label="Manualidades/artesanías"
        />
        
        <Checkbox
          id="practica10"
          name="practica[]"
          value="Recreación"
          checked={formData.practica.includes('Recreación')}
          onChange={handleCheckboxChange}
          label="Recreación"
        />
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-start">
            <Checkbox
              id="practica11"
              name="practica[]"
              value="Otro"
              checked={isOtherChecked}
              onChange={handleCheckboxChange}
              label="Otro"
            />
            
            {isOtherChecked && (
              <div className="ml-4 flex-grow">
                <FormInput
                  id="cual"
                  name="practica12"
                  value={formData.practica12 || ''}
                  onChange={handleOtherChange}
                  placeholder="Separe con punto y coma(;)"
                  label=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticaSection;