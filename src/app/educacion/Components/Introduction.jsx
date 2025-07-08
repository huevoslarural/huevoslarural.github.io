// src/app/educacion/Components/Introduction.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaGraduationCap,
    FaLaptopCode,
    FaChartLine,
    FaUsers,
    FaBookOpen,
    FaHeart
} from 'react-icons/fa';
import Link from 'next/link';





function Introduction() {
    // Estado para controlar la animación inicial
    const [isVisible, setIsVisible] = useState(false);

    // Activar animaciones cuando el componente se monte
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Efectos de animación para los elementos
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    // Áreas de conocimiento destacadas
    const knowledgeAreas = [
        {
            icon: <FaLaptopCode />,
            title: "Tecnología Moderna",
            description: "Aprenda las últimas tendencias tecnológicas"
        },
        {
            icon: <FaChartLine />,
            title: "Finanzas Personales",
            description: "Domine su economía y planificación financiera"
        },
        {
            icon: <FaUsers />,
            title: "Relaciones Sociales",
            description: "Mejore sus habilidades de comunicación"
        },
        {
            icon: <FaHeart />,
            title: "Desarrollo Personal",
            description: "Crezca como persona y ciudadano"
        }
    ];



    return (
        // Sección principal con etiqueta semántica para mejor SEO
        <section className="py-12 bg-amber-50 min-h-screen" aria-labelledby="education-title">
            <div className="container mx-auto px-4 md:px-6 pt-16">
                {/* Contenedor principal */}
                <div className="max-w-6xl mx-auto">

                    {/* Encabezado principal */}
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <h1 id="education-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6">
                            ¿Quiere un mejor El Salvador?
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-700 mb-4">
                            La educación gratuita es clave
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Contenido principal dividido en dos columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                        {/* Columna izquierda - Contenido textual */}
                        <motion.article
                            className="space-y-6"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={slideInFromLeft}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                                    Acceda a <strong className="text-amber-800">cursos actualizados</strong> sobre
                                    tecnología moderna, finanzas personales, relaciones sociales y demás temas de
                                    vanguardia necesarios para una <em className="text-amber-700">sociedad sana con
                                        ciudadanos honestos</em>.
                                </p>

                                <div className="bg-amber-100 p-6 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-3">
                                        <FaGraduationCap className="text-amber-600" aria-hidden="true" />
                                        Educación Sin Límites de Edad
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        <strong>Si usted es padre de familia</strong>, apoye a sus hijos en estos
                                        cursos gratuitos que les servirán a futuro.
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Si usted es adulto</strong>, también puede reforzar su saber.
                                        La educación no tiene edad.
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                        {/* Columna derecha - Ícono principal */}
                        <motion.figure
                            className="flex justify-center"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={fadeIn}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="relative">
                                <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                                    <FaBookOpen className="text-white text-8xl" aria-hidden="true" />
                                </div>
                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center shadow-lg">
                                    <FaGraduationCap className="text-amber-800 text-2xl" aria-hidden="true" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center shadow-lg">
                                    <FaHeart className="text-amber-800 text-2xl" aria-hidden="true" />
                                </div>
                            </div>
                            <figcaption className="sr-only">
                                Representación visual de la educación gratuita
                            </figcaption>
                        </motion.figure>
                    </div>

                    {/* Sección de áreas de conocimiento */}
                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-800 text-center mb-8">
                            Áreas de Conocimiento
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {knowledgeAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                            <span className="text-amber-600 text-xl" aria-hidden="true">
                                                {area.icon}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-amber-800">
                                            {area.title}
                                        </h4>
                                    </div>
                                    <p className="text-gray-700">
                                        {area.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}

export default Introduction;