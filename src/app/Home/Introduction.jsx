// src/app/Home/Introduction.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEgg, FaShippingFast, FaStore, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

import Data from "../constants.json"





function Introduction() {
    // Estado para controlar si la imagen está cargando
    const [imageLoading, setImageLoading] = useState(true);

    // URL del logotipo
    const logoUrl = Data.logos.favicon;

    // Precargar la imagen cuando el componente se monte
    useEffect(() => {
        // Crear una nueva imagen para precargar
        const preloadImage = new Image();

        // Configurar el manejo de carga
        preloadImage.onload = () => {
            setImageLoading(false);
        };

        // Establecer la URL de la imagen para iniciar la carga
        preloadImage.src = logoUrl;
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

    // Características principales del negocio
    const features = [
        { icon: <FaEgg />, text: "Huevos frescos" },
        { icon: <FaShippingFast />, text: "Envíos por mayoreo" },
        { icon: <FaStore />, text: "De la granja a tu mesa" },
        { icon: <FaCheck />, text: "Precios accesibles" }
    ];

    // Manejador para cuando la imagen termine de cargar
    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        // Sección principal con etiqueta semántica para mejor SEO
        <section className="py-12 bg-amber-50" aria-labelledby="section-title">
            <div className="container mx-auto px-4 md:px-6 pt-16">
                {/* Contenedor principal con flex para alinear elementos */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Contenedor de la imagen del logo con etiqueta figure para mejor semántica */}
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-amber-400">
                            {/* Loader mientras carga la imagen */}
                            {imageLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-amber-100" aria-hidden="true">
                                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}

                            {/* Imagen del logo usando HTML img con atributos */}
                            <img
                                src={logoUrl}
                                alt="Logo de Distribuidora Huevos La Rural - Venta de huevos frescos en El Salvador"
                                className="w-full h-full object-cover"
                                onLoad={handleImageLoad}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                style={{ display: imageLoading ? 'none' : 'block' }}
                                width="256"
                                height="256"
                                title="Distribuidora Huevos La Rural - Huevos frescos en El Salvador"
                            />
                            {/* Leyenda para la imagen */}
                            <figcaption className="sr-only">Logo oficial de Distribuidora Huevos La Rural</figcaption>
                        </div>
                    </figure>

                    {/* Contenido textual de la introducción usando article para mejor estructura semántica */}
                    <motion.article
                        className="w-full md:w-2/3"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        {/* Encabezado principal con ID para el aria-labelledby */}
                        <h1 id="section-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4">
                            Distribuidora Huevos La Rural
                        </h1>

                        {/* Subtítulo con etiqueta semántica */}
                        <h2 className="text-xl md:text-2xl text-amber-600 mb-6">
                            Huevos frescos y de calidad en El Salvador
                        </h2>

                        {/* Descripción principal */}
                        <p className="text-gray-700 mb-8 text-lg">
                            En <strong>Distribuidora Huevos La Rural</strong>, ofrecemos huevos frescos y nutritivos a precios accesibles <mark> al por mayor y menor</mark>,
                            ideales para tu hogar o negocio. Nuestros productos provienen de <em>granja propia y granjas asociadas</em> que
                            cumplen con nuestros estrictos criterios de frescura y calidad.
                        </p>

                        {/* Lista de características usando ul/li para mejor semántica */}
                        <h3 className="sr-only">Características de nuestro servicio</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    <span className="text-amber-500 text-xl" aria-hidden="true">{feature.icon}</span>
                                    <span className="text-gray-800">{feature.text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Botón de llamada a la acción */}
                        <div className="mt-8">
                            <Link href="/ordenar">
                                <motion.div
                                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    role="button"
                                    aria-label="Ordenar huevos frescos ahora"
                                >
                                    ¡Ordenar ahora!
                                </motion.div>
                            </Link>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
};
export default Introduction;