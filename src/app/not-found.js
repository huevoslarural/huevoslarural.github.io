// src/app/not-found.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaEgg, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';





function NotFound() {
    // Efectos de animación para los elementos
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    // Animación para el huevo que rebota
    const bounceAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Animación para el número 404
    const scaleAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        // Contenedor principal de la página 404
        <section className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 mt-16" role="main">
            <div className="container mx-auto max-w-4xl text-center">

                {/* Contenedor principal con animación */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="space-y-8"
                >
                    {/* Icono de advertencia animado */}
                    <motion.div
                        className="flex justify-center mb-8"
                        animate={bounceAnimation}
                    >
                        <div className="bg-amber-400 p-6 rounded-full shadow-lg">
                            <FaExclamationTriangle className="text-6xl text-amber-800" aria-hidden="true" />
                        </div>
                    </motion.div>

                    {/* Número 404 grande y animado */}
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-amber-800 mb-4"
                        animate={scaleAnimation}
                        aria-label="Error 404"
                    >
                        4
                        <motion.span
                            animate={bounceAnimation}
                            className="inline-block text-amber-600"
                        >
                            <FaEgg className="mx-4" aria-hidden="true" />
                        </motion.span>
                        4
                    </motion.h1>

                    {/* Título principal del error */}
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-700 mb-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        ¡Oops! Página no encontrada
                    </motion.h2>

                    {/* Mensaje descriptivo */}
                    <motion.div
                        className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-amber-500 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                            Lo sentimos, pero la página que estás buscando no existe o ha sido movida.
                        </p>
                        <p className="text-amber-600 font-medium text-base md:text-lg">
                            ¡Pero no te preocupes! Aún puedes encontrar nuestros <strong>huevos frescos y de calidad</strong>.
                        </p>
                    </motion.div>

                    {/* Sugerencias útiles */}
                    <motion.div
                        className="bg-amber-100 p-6 rounded-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-amber-800 mb-4">
                            ¿Qué puedes hacer?
                        </h3>
                        <ul className="text-amber-700 space-y-2 text-left list-none">
                            <li className="flex items-center gap-3">
                                <span className="text-amber-500" aria-hidden="true">•</span>
                                Verificar que la URL esté escrita correctamente
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-amber-500" aria-hidden="true">•</span>
                                Regresar a la página principal
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-amber-500" aria-hidden="true">•</span>
                                Contactarnos si necesitas ayuda específica
                            </li>
                        </ul>
                    </motion.div>

                    {/* Botones de acción */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        {/* Botón para regresar al inicio */}
                        <Link href="/">
                            <motion.div
                                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                role="button"
                                aria-label="Regresar a la página principal"
                            >
                                <FaHome className="text-xl" aria-hidden="true" />
                                Ir al Inicio
                            </motion.div>
                        </Link>

                        {/* Botón para página anterior */}
                        <motion.button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-500 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Regresar a la página anterior"
                        >
                            <FaArrowLeft className="text-xl" aria-hidden="true" />
                            Página Anterior
                        </motion.button>
                    </motion.div>

                    {/* Mensaje promocional */}
                    <motion.div
                        className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-6 rounded-lg max-w-2xl mx-auto mt-12"
                        initial={{ opacity: 0, rotateX: -20 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <h4 className="text-xl font-bold mb-3">
                            🥚 ¡Mientras estás aquí!
                        </h4>
                        <p className="text-amber-100 mb-4">
                            ¿Sabías que podemos llevar <strong>huevos directos de la granja</strong> hasta tu establecimiento?
                        </p>
                        <Link href="/ordenar">
                            <motion.div
                                className="inline-block bg-white text-amber-600 font-bold py-2 px-6 rounded-lg hover:bg-amber-50 transition-colors duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                role="button"
                                aria-label="Contactar para ordenar huevos"
                            >
                                ¡Ordena ahora!
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Información de contacto rápido */}
                    <motion.div
                        className="text-amber-600 text-sm mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                    >
                        <p>
                            ¿Necesitas ayuda? Contáctanos y te atenderemos de inmediato.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default NotFound;