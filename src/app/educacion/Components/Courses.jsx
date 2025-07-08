// src/app/educacion/Components/Courses.jsx
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUser, FaSpinner, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';





function Courses() {
    // Estados para manejar los cursos y el estado de la aplicación
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState(null);
    const [displayedCourses, setDisplayedCourses] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    // Número de cursos a mostrar por batch
    const COURSES_PER_BATCH = 6;

    // Función para obtener los cursos de la API
    const fetchCourses = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('https://cupones-py.onrender.com/api/cupones');

            if (!response.ok) {
                throw new Error('Error al obtener los cursos');
            }

            const data = await response.json();

            // Verificar si la API está actualizando
            if (data.estado === 'actualizando') {
                setUpdating(true);
                setCourses([]);
                setDisplayedCourses([]);
                setHasMore(false);
                return;
            }

            // Filtrar solo cursos gratuitos
            const freeCourses = data.cupones.filter(
                course => course.precio_descuento === 'Gratis'
            );

            setCourses(freeCourses);
            setUpdating(false);

            // Mostrar los primeros cursos
            const initialCourses = freeCourses.slice(0, COURSES_PER_BATCH);
            setDisplayedCourses(initialCourses);
            setHasMore(freeCourses.length > COURSES_PER_BATCH);

        } catch (err) {
            setError('Error al cargar los cursos. Intenta nuevamente.');
            console.error('Error fetching courses:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para cargar más cursos
    const loadMoreCourses = useCallback(() => {
        if (loadingMore || !hasMore) return;

        setLoadingMore(true);

        // Simular un pequeño delay para mejor UX
        setTimeout(() => {
            const currentCount = displayedCourses.length;
            const nextBatch = courses.slice(currentCount, currentCount + COURSES_PER_BATCH);

            setDisplayedCourses(prev => [...prev, ...nextBatch]);
            setHasMore(currentCount + COURSES_PER_BATCH < courses.length);
            setLoadingMore(false);
        }, 500);
    }, [courses, displayedCourses, hasMore, loadingMore]);

    // Función para detectar cuando el usuario llega al final
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop
            >= document.documentElement.offsetHeight - 1000) {
            loadMoreCourses();
        }
    }, [loadMoreCourses]);

    // Efectos
    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Función para abrir el curso en una nueva pestaña
    const handleCourseClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    // Componente de loading
    if (loading) {
        return (
            <section className="py-12 bg-amber-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-amber-700 text-lg font-medium">Cargando cursos gratuitos...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Componente para cuando la API está actualizando
    if (updating) {
        return (
            <section className="py-12 bg-amber-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto"
                        >
                            <FaSpinner className="text-amber-500 text-4xl mx-auto mb-4 animate-spin" />
                            <h2 className="text-2xl font-bold text-amber-800 mb-3">
                                Estamos actualizando los cursos...
                            </h2>
                            <p className="text-amber-600 text-lg mb-4">
                                Por favor espera unos minutos mientras añadimos nuevos cursos gratuitos.
                            </p>
                            <div className="flex items-center justify-center gap-2 text-amber-500">
                                <FaGraduationCap className="text-xl" />
                                <span className="text-sm">Vuelve pronto para ver las novedades</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    // Componente de error
    if (error) {
        return (
            <section className="py-12 bg-amber-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
                            <p className="font-medium">{error}</p>
                            <button
                                onClick={fetchCourses}
                                className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Reintentar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 bg-amber-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Encabezado de la sección */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4"
                    >
                        Cursos Gratuitos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-amber-600 mb-4"
                    >
                        Aprende nuevas habilidades sin costo alguno
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-amber-100 border border-amber-300 rounded-lg p-4 max-w-2xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-2 text-amber-800 mb-2">
                            <FaGraduationCap className="text-xl" />
                            <span className="font-semibold">¡Importante!</span>
                        </div>
                        <p className="text-amber-700 text-sm text-center">
                            Los cupones de descuento tienen tiempo limitado.
                            <strong> Inscríbete pronto</strong> antes de que expiren y el curso vuelva a su precio original.
                        </p>
                    </motion.div>
                </div>

                {/* Grid de cursos */}
                {displayedCourses.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                    >
                        {displayedCourses.map((course, index) => (
                            <motion.div
                                key={`${course.titulo}-${index}`}
                                variants={cardVariants}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                {/* Imagen del curso */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={course.imagen}
                                        alt={`Portada del curso: ${course.titulo}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgdmlld0JveD0iMCAwIDQ4MCAyNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNDAgMTM1TDIwMCAxMDVMMjgwIDEwNUwyNDAgMTM1WiIgZmlsbD0iI0Q5Q0M5QyIvPgo8L3N2Zz4K';
                                        }}
                                    />
                                    {/* Badge de gratis */}
                                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        GRATIS
                                    </div>
                                </div>

                                {/* Contenido del curso */}
                                <div className="p-6">
                                    {/* Título del curso */}
                                    <h3 className="text-xl font-bold text-amber-800 mb-3 line-clamp-2 leading-tight">
                                        {course.titulo}
                                    </h3>

                                    {/* Instructor */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaUser className="text-amber-500" />
                                        <span className="text-amber-600 font-medium">
                                            {course.instructor}
                                        </span>
                                    </div>

                                    {/* Descripción */}
                                    <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                                        {course.descripcion}
                                    </p>

                                    {/* Precios */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-gray-500 line-through text-lg">
                                            {course.precio_original}
                                        </span>
                                        <span className="text-green-600 font-bold text-2xl">
                                            ¡GRATIS!
                                        </span>
                                    </div>

                                    {/* Botón de acceso */}
                                    <motion.button
                                        onClick={() => handleCourseClick(course.url_udemy)}
                                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        aria-label={`Acceder al curso: ${course.titulo}`}
                                    >
                                        <FaExternalLinkAlt />
                                        Acceder al curso
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-12">
                        <FaBook className="text-amber-400 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-amber-800 mb-2">
                            No hay cursos disponibles
                        </h3>
                        <p className="text-amber-600">
                            Vuelve pronto, añadimos cursos nuevos regularmente.
                        </p>
                    </div>
                )}

                {/* Indicador de carga para más cursos */}
                {loadingMore && (
                    <div className="text-center py-8">
                        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-amber-700">Cargando más cursos...</p>
                    </div>
                )}

                {/* Mensaje cuando no hay más cursos */}
                {!hasMore && displayedCourses.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-8"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
                            <FaGraduationCap className="text-amber-500 text-3xl mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-amber-800 mb-2">
                                ¡Esos son todos los cursos por ahora!
                            </h3>
                            <p className="text-amber-600">
                                Tratamos de añadir más cursos gratuitos todos los días.
                                Vuelve pronto para ver las novedades.
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Courses;