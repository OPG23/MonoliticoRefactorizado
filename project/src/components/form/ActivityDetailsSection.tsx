import React from 'react';
import FormInput from '../ui/FormInput';
import TextArea from '../ui/TextArea';
import { useFormContext } from '../../context/FormContext';

const ActivityDetailsSection: React.FC = () => {
  const { formData, updateForm, errors, validateField } = useFormContext();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(e.target.name, e.target.value);
  };
  
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateForm(e.target.name, e.target.value);
  };
  
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className="col-span-1 md:col-span-2">
          <FormInput
            id="nombre_actividad"
            name="nombre_actividad"
            value={formData.nombre_actividad}
            onChange={handleInputChange}
            onBlur={() => validateField('nombre_actividad')}
            label="Nombre de la actividad"
            placeholder="Nombre de la presentación tal y como se publicará"
            required
            error={errors.nombre_actividad}
          />
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <FormInput
            id="nombre_artista"
            name="nombre_artista"
            value={formData.nombre_artista}
            onChange={handleInputChange}
            onBlur={() => validateField('nombre_artista')}
            label="Nombre artista/agrupación"
            placeholder="Por favor ponga el nombre para publicar"
            required
            error={errors.nombre_artista}
          />
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <FormInput
            id="enlace_actividad"
            name="enlace_actividad"
            value={formData.enlace_actividad}
            onChange={handleInputChange}
            onBlur={() => validateField('enlace_actividad')}
            label="Enlace a la actividad / evento"
            placeholder="ej: http://www.youtube.com/watch?v=rxpTjcouaeQ"
            required
            error={errors.enlace_actividad}
          />
          <p className="text-xs text-gray-500 mt-1">
            Al publicar el enlace acepta la responsabilidad sobre la propiedad de los derechos 
            de reproducción del contenido. Es decir son suyos o tiene autorización o conocimiento 
            de que pueden publicarse libremente
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <FormInput
            id="institucion_responsable"
            name="institucion_responsable"
            value={formData.institucion_responsable}
            onChange={handleInputChange}
            onBlur={() => validateField('institucion_responsable')}
            label="Institución responsable de la transmisión digital de la actividad / evento"
            required
            error={errors.institucion_responsable}
          />
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <TextArea
            id="trata_de"
            name="trata_de"
            value={formData.trata_de}
            onChange={handleTextAreaChange}
            onBlur={() => validateField('trata_de')}
            label="Explique brevemente de que trata la actividad"
            placeholder="Máximo 600 caracteres"
            maxLength={600}
            rows={4}
            required
            error={errors.trata_de}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailsSection;