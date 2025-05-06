import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Music, Film, BookOpen, Palette, Users, ArrowRight } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { EventData } from '../types';
import { fetchEvents } from '../api/eventService';

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
      setLoading(false);
    };
    
    getEvents();
  }, []);
  
  const getEventIcon = (practica: string) => {
    if (practica.includes('Música')) return <Music className="h-8 w-8 text-purple-500" />;
    if (practica.includes('Audiovisuales')) return <Film className="h-8 w-8 text-purple-500" />;
    if (practica.includes('Literatura')) return <BookOpen className="h-8 w-8 text-purple-500" />;
    if (practica.includes('Artes plásticas')) return <Palette className="h-8 w-8 text-purple-500" />;
    return <Users className="h-8 w-8 text-purple-500" />;
  };
  
  return (
    <MainLayout>
      <div className="py-12 bg-gradient-to-b from-purple-100 to-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            El arte te cuida, cuidemos el arte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Plataforma virtual para visibilizar la labor de artistas e instituciones latinoamericanas
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              to="/registro" 
              className="px-6 py-3 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Inscribe tu actividad
            </Link>
            
            <a 
              href="#agenda" 
              className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-md shadow-sm hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Ver agenda cultural
            </a>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué ArteCuida?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creemos en el valor y el poder de transformación que tiene el arte y la cultura para encontrar soluciones sostenibles y creativas que mejoren la vida de los artistas y la sociedad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conexión</h3>
              <p className="text-gray-600">
                Conectamos a artistas con su público en el entorno digital, trascendiendo las limitaciones físicas.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agenda Cultural</h3>
              <p className="text-gray-600">
                Centralizamos eventos y actividades artísticas para que el público pueda descubrir nuevas propuestas.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Palette className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visibilidad</h3>
              <p className="text-gray-600">
                Damos espacio a artistas e instituciones para mostrar su trabajo y alcanzar nuevas audiencias.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="agenda" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agenda Cultural</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre eventos y actividades artísticas para disfrutar desde cualquier lugar
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Cargando eventos...</p>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.imagen_promo || 'https://via.placeholder.com/400x200?text=Evento+Cultural'} 
                      alt={event.nombre_actividad} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {getEventIcon(event.practica)}
                      <span className="ml-2 text-sm font-medium text-purple-600">{event.practica}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.nombre_actividad}</h3>
                    <p className="text-gray-600 mb-4">{event.nombre_artista}</p>
                    
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                      {event.trata_de}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Duración: {event.duracion} min
                      </span>
                      
                      <a 
                        href={event.enlace_actividad} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800"
                      >
                        Ver más
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">No hay eventos disponibles</h3>
              <p className="text-gray-600 mb-6">
                Actualmente no hay eventos en la agenda. ¡Sé el primero en publicar uno!
              </p>
              <Link 
                to="/registro" 
                className="px-6 py-3 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Inscribe tu actividad
              </Link>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              to="/registro" 
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
            >
              ¿Quieres hacer parte de la agenda?
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;