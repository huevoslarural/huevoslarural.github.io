// src/app/Home/Why.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaShoppingCart, FaHandshake, FaTruck } from 'react-icons/fa';

function Why() {
    // Efectos de animación para los elementos
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Razones para elegir nuestros huevos
    const reasons = [
        {
            icon: <FaUtensils />,
            title: "Ideal para Consumo Personal",
            description: "Disfruta de huevos frescos y nutritivos en tu hogar. La frescura y calidad se nota en cada platillo que prepares.",
        },
        {
            icon: <FaUsers />,
            title: "Perfecto para Restaurantes",
            description: "Garantiza la calidad en tus recetas. Nuestros huevos cumplen con los estándares que tu negocio gastronómico necesita.",
        },
        {
            icon: <FaShoppingCart />,
            title: "Excelente para Reventa",
            description: "Precios accesibles que te permiten obtener ganancias al revender. Una oportunidad de negocio con productos de calidad garantizada.",
        },
        {
            icon: <FaHandshake />,
            title: "Calidad Garantizada",
            description: "Huevos seleccionados cuidadosamente, frescos y saludables, directos de nuestra granja y granjas asociadas para asegurar máxima calidad.",
        },
        {
            icon: <FaTruck />,
            title: "Envíos a Zonas Específicas",
            description: "Servicio de delivery disponible en áreas seleccionadas. Consulta nuestra sección de 'Cobertura de Envíos' para verificar disponibilidad.",
        }
    ];

    return (
        // Sección principal con etiqueta semántica y atributos estructurados para mejor SEO
        <section
            className="py-16 bg-white"
            id="por-que-elegirnos"
            aria-labelledby="why-section-title"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Encabezado de la sección con microdata para SEO */}
                <header className="text-center mb-12">
                    <motion.h2
                        id="why-section-title"
                        className="text-3xl md:text-4xl font-bold text-amber-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        itemProp="name"
                    >
                        ¿Por qué elegir nuestros huevos?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-700 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        itemProp="description"
                    >
                        En <strong>Distribuidora Huevos La Rural</strong> ofrecemos productos frescos de calidad
                        que se adaptan a diferentes necesidades y presupuestos.
                    </motion.p>
                </header>

                {/* Contenedor principal de las razones con estructura de microdata */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    role="list"
                >
                    {/* Iteramos sobre cada razón para mostrarla con atributos de microdata */}
                    {reasons.map((reason, index) => (
                        <motion.article
                            key={index}
                            className="bg-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={fadeInUp}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                            role="listitem"
                        >
                            <meta itemProp="position" content={index + 1} />
                            <div className="flex flex-col items-center text-center">
                                {/* Icono de la razón */}
                                <span className="text-4xl text-amber-500 mb-4" aria-hidden="true">
                                    {reason.icon}
                                </span>

                                {/* Título de la razón */}
                                <h3
                                    className="text-xl font-semibold text-amber-800 mb-3"
                                    itemProp="name"
                                >
                                    {reason.title}
                                </h3>

                                {/* Descripción de la razón */}
                                <p
                                    className="text-gray-700"
                                    itemProp="description"
                                >
                                    {reason.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Sección de testimonio/destacado con microdata */}
                <motion.div
                    className="mt-16 bg-amber-100 rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    itemScope
                    itemType="https://schema.org/Product"
                >
                    <div className="text-center">
                        <h3
                            className="text-2xl font-bold text-amber-800 mb-6"
                            itemProp="slogan"
                        >
                            ¡De la granja a tu mesa con un solo clic!
                        </h3>
                        <p
                            className="text-lg text-gray-800 mb-6 max-w-4xl mx-auto"
                            itemProp="description"
                        >
                            Ya sea para su consumo diario, su negocio de alimentos o para emprender en la venta de huevos,
                            <strong> Distribuidora Huevos La Rural</strong> te ofrece huevos frescos de granja propia
                            y de granjas amigas que cumplen con nuestros estrictos criterios de frescura y calidad.
                        </p>

                        {/* Callout para servicio de envío */}
                        <div
                            className="bg-white p-4 rounded-lg inline-block shadow-sm"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            <p className="text-amber-700 font-medium">
                                Ofrecemos envíos solamente en las áreas especificadas en nuestra sección
                                <strong> "Cobertura de Envíos"</strong>. Pero usted puede recoger su pedido en cualquiera de nuestras sedes.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Why;