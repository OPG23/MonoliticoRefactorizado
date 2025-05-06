import { FormDataType, EventData } from '../types';

// Remplazar con la URL de del API real 
const API_URL = '/api/events';

// Formato de datos para envio
const formatFormData = (data: FormDataType): FormDataType => {
  const formattedData = { ...data };
  
  //Formato de fechas y horas según la selección
  if (data.tiempo_actividad === "En un rango de tiempo específico" && data.desde && data.tdesde && data.hasta && data.thasta) {
    //Formato fecha y hora 
  } 
  else if (data.tiempo_actividad === "Con previa inscripción" && data.fecha_actividad_inscripcion && data.tfecha_actividad_inscripcion) {
    // Formato fecha y hora para actividades con inscripción
  }
  
  return formattedData;
};

// Enviar formulario de evento
export const submitEventForm = async (formData: FormDataType): Promise<{ success: boolean; message: string }> => {
  try {
    const formattedData = formatFormData(formData);
    
    // Crear objeto FormData para la subida de archivos
    const submitData = new FormData();
    
    // Añadir todos los campos del formulario
    Object.entries(formattedData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        submitData.append(key, value.join(';'));
      } else if (value !== undefined) {
        submitData.append(key, value.toString());
      }
    });
    
    // Anadir el archivo si existe
    if (formData.subir_archivo) {
      submitData.append('subir_archivo', formData.subir_archivo);
    }
    
    // En una aplicación real, esto sería una llamada real a la API
    // const response = await fetch(API_URL, {
    //   method: 'POST',
    //   body: submitData,
    // });
    

    // Simular el envío con éxito
    return { 
      success: true, 
      message: 'Tu evento fue cargado exitosamente. En cuanto verifiquemos la información será publicado.' 
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      message: 'Ocurrió un error. Inténtalo de nuevo o envíanos el evento al correo artecuida2020@suenos.in con asunto PARA AGENDA.' 
    };
  }
};

// // Obtener eventos para la agenda
export const fetchEvents = async (): Promise<EventData[]> => {
  try {
    // En una aplicación real, esto se obtendría de una API real
    // const response = await fetch(API_URL);
    // const data = await response.json();
    
    // Para la demostración, devuelve datos simulados
    return [
      {
        id: 1,
        practica: 'Música',
        tipo_actividad: 'Circulación',
        nombre_actividad: 'Concierto Virtual',
        nombre_artista: 'Banda Ejemplo',
        enlace_actividad: 'https://www.youtube.com/watch?v=xqFTe96OWPU',
        institucion_responsable: 'Fundación Cultural',
        trata_de: 'Concierto virtual con músicos de diferentes partes del mundo.',
        tiempo_actividad: 'Disponible permanente',
        duracion: '60',
        nacionalidad: 'Colombia',
        sitio_web: 'https://example.com',
        facebook: 'bandaejemplo',
        instagram: 'bandaejemplo',
        publico: 'Familiar',
        imagen_promo: 'imagesagenda/example.jpg',
        nombre_apellido: 'Juan Pérez',
        mail: 'juan@example.com',
        fecha_montada: '2023-06-15 14:30:00'
      }
    ];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};