import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import EventRegistrationForm from '../components/form/EventRegistrationForm';
import { FormProvider } from '../context/FormContext';

const RegistrationPage: React.FC = () => {
  return (
    <MainLayout showBackButton={true}>
      <div className="container mx-auto py-10 px-4 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¿Quieres hacer parte de la agenda?
          </h1>
          <p className="text-gray-600">
            Si quieres programar llena el formulario. En cuanto verifiquemos la información tu evento será publicado.
          </p>
        </div>
        
        <FormProvider>
          <EventRegistrationForm />
        </FormProvider>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;