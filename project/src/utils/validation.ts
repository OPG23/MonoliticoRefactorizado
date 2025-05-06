import { FormDataType, ValidationErrors } from '../types';

export const validateForm = (data: FormDataType): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Required field validation
  if (!data.practica || data.practica.length === 0) {
    errors.practica = "Debe seleccionar al menos una práctica";
  }

  if (!data.tipo_actividad || data.tipo_actividad.length === 0) {
    errors.tipo_actividad = "Debe seleccionar al menos un tipo de actividad";
  }

  if (!data.nombre_actividad) {
    errors.nombre_actividad = "Debe indicar un nombre para la actividad";
  }

  if (!data.nombre_artista) {
    errors.nombre_artista = "Debe indicar un nombre de artista";
  }

  if (!data.enlace_actividad) {
    errors.enlace_actividad = "Dirección del enlace de la actividad obligatoria";
  }

  if (!data.institucion_responsable) {
    errors.institucion_responsable = "Debe indicar una institución responsable";
  }

  if (!data.trata_de) {
    errors.trata_de = "Debe indicar una descripción de la actividad";
  }

  // Validate based on tiempo_actividad selection
  if (data.tiempo_actividad === "En un rango de tiempo específico") {
    if (!data.desde) {
      errors.desde = "Debe colocar una fecha inicial";
    }
    if (!data.tdesde) {
      errors.tdesde = "Debe colocar una hora inicial";
    }
    if (!data.hasta) {
      errors.hasta = "Debe colocar una fecha final";
    }
    if (!data.thasta) {
      errors.thasta = "Debe colocar una hora final";
    }
    if (!data.dias || data.dias.length === 0) {
      errors.dias = "Debe seleccionar los días en que estará disponible la actividad";
    }
  }

  if (data.tiempo_actividad === "Con previa inscripción") {
    if (!data.fecha_actividad_inscripcion) {
      errors.fecha_actividad_inscripcion = "Debe colocar la fecha de la actividad";
    }
    if (!data.tfecha_actividad_inscripcion) {
      errors.tfecha_actividad_inscripcion = "Debe colocar la hora de la actividad";
    }
    if (!data.correo_inscripcion) {
      errors.correo_inscripcion = "Debe colocar cómo se inscriben";
    }
  }

  if (!data.nacionalidad) {
    errors.nacionalidad = "La nacionalidad es obligatoria";
  }

  if (!data.sitio_web) {
    errors.sitio_web = "Dirección del sitio web obligatoria";
  }

  if (!data.publico) {
    errors.publico = "Debe seleccionar el público objetivo";
  }

  if (!data.nombre_apellido) {
    errors.nombre_apellido = "Debe escribir el nombre y apellido de quien sube la información";
  }

  if (!data.mail) {
    errors.mail = "Debe escribir una dirección electrónica de quien sube la información";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.mail)) {
    errors.mail = "Formato de mail no válido";
  }

  // File validation
  if (!data.subir_archivo) {
    errors.subir_archivo = "Debe subir una imagen para promocionar la actividad";
  }

  return errors;
};