import React, { useState } from 'react';
import PracticaSection from './PracticaSection';
import TipoActividadSection from './TipoActividadSection';
import ActivityDetailsSection from './ActivityDetailsSection';
import TimeSection from './TimeSection';
import AdditionalDetailsSection from './AdditionalDetailsSection';
import PublicSection from './PublicSection';
import FileSection from './FileSection';
import UserInfoSection from './UserInfoSection';
import { useFormContext } from '../../context/FormContext';
import { submitEventForm } from '../../api/eventService';

const EventRegistrationForm: React.FC = () => {
  const { formData, validateAll, resetForm } = useFormContext();
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos
    const isValid = validateAll();
    
    if (!isValid) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setSubmitting(true);
    
    try {
      const result = await submitEventForm(formData);
      setSubmitResult(result);
      
      if (result.success) {
        resetForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Ocurrió un error inesperado. Por favor intente nuevamente.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
      {submitResult.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          <p className="text-center text-lg font-medium">{submitResult.message}</p>
          {submitResult.success && (
            <p className="text-center mt-2">
              Si deseas hacer algún cambio al registro escríbanos a artecuida2020@suenos.org con asunto: Error en inscripción
            </p>
          )}
        </div>
      )}

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Formulario de inscripción de actividades/eventos
        </h2>
        <p className="text-gray-600">
          Únete a la primera plataforma virtual para visibilizar la labor de artistas e instituciones 
          latinoamericanas en tiempos de pandemia. Para responder a los retos actuales, somos puente 
          y espacio de encuentro entre los artistas y la sociedad. Inscribe tu actividad o evento en 
          el formulario y forma parte de nuestra agenda.
        </p>
        <p className="text-sm text-red-500 mt-2">* Campos obligatorios</p>
      </div>

      <form onSubmit={handleSubmit}>
        <PracticaSection />
        <TipoActividadSection />
        <ActivityDetailsSection />
        <TimeSection />
        <AdditionalDetailsSection />
        <PublicSection />
        <FileSection />
        <UserInfoSection />

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className={`px-6 py-3 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              submitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {submitting ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;