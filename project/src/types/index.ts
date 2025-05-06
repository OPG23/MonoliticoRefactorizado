// Tipos de datos de formulario
export interface FormDataType {
  practica: string[];
  practica12?: string;
  tipo_actividad: string[];
  nombre_actividad: string;
  nombre_artista: string;
  enlace_actividad: string;
  institucion_responsable: string;
  trata_de: string;
  tiempo_actividad: string;
  duracion: string;
  nacionalidad: string;
  sitio_web: string;
  facebook?: string;
  instagram?: string;
  publico: string;
  publico2?: string;
  desde?: string;
  tdesde?: string;
  hasta?: string;
  thasta?: string;
  dias: string[];
  fecha_actividad_inscripcion?: string;
  tfecha_actividad_inscripcion?: string;
  correo_inscripcion?: string;
  subir_archivo?: File;
  nombre_apellido: string;
  mail: string;
  institucion?: string;
}

// Tipo de error de validación
export interface ValidationErrors {
  [key: string]: string;
}

// Tipo de datos del evento
export interface EventData {
  id: number;
  practica: string;
  tipo_actividad: string;
  nombre_actividad: string;
  nombre_artista: string;
  enlace_actividad: string;
  institucion_responsable: string;
  trata_de: string;
  tiempo_actividad: string;
  duracion: string;
  nacionalidad: string;
  sitio_web: string;
  facebook?: string;
  instagram?: string;
  publico: string;
  imagen_promo: string;
  nombre_apellido: string;
  mail: string;
  fecha_montada: string;
}