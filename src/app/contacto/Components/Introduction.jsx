// src/app/contacto/Components/Introduction.jsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaEgg,
    FaComments,
    FaHandshake,
    FaShippingFast
} from 'react-icons/fa';

import Data from "../../constants.json";





function Introduction() {
    // Estado para controlar formularios activos o interacciones
    const [activeContact, setActiveContact] = useState(null);

    // Información de contacto (reemplaza con Data.contacto cuando importes constants.json)
    const contactInfo = {
        phone: Data.contacto.telefono_string,
        whatsapp: Data.contacto.telefono_string,
        email: Data.contacto.email_string,
        address: Data.contacto.ubicacion,
        hours: Data.contacto.horarios_atencion
    };

    // Métodos de contacto disponibles
    const contactMethods = [
        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            description: "Respuesta inmediata",
            detail: "Chatea con nosotros directamente",
            color: "bg-green-500 hover:bg-green-600",
            textColor: "text-green-700",
            bgLight: "bg-green-50",
            action: () => openWhatsApp()
        },
        {
            icon: <FaPhone />,
            title: "Teléfono",
            description: "Llamada directa",
            detail: "Habla con nuestro equipo",
            color: "bg-amber-500 hover:bg-amber-600",
            textColor: "text-amber-700",
            bgLight: "bg-amber-50",
            action: () => window.open(`tel:${contactInfo.phone}`, '_self')
        },
        {
            icon: <FaEnvelope />,
            title: "Correo Electrónico",
            description: "Respuesta en 24 horas",
            detail: "Envíanos tu consulta detallada",
            color: "bg-blue-500 hover:bg-blue-600",
            textColor: "text-blue-700",
            bgLight: "bg-blue-50",
            action: () => window.open(`mailto:${contactInfo.email}`, '_self')
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Visítanos",
            description: "Conoce nuestras instalaciones",
            detail: "Ven y conoce nuestros productos",
            color: "bg-purple-500 hover:bg-purple-600",
            textColor: "text-purple-700",
            bgLight: "bg-purple-50",
            action: () => setActiveContact('location')
        }
    ];

    // Razones para contactarnos
    const contactReasons = [
        {
            icon: <FaEgg />,
            title: "Pedidos al por mayor",
            description: "Precios especiales para restaurantes, tiendas y distribuidores"
        },
        {
            icon: <FaShippingFast />,
            title: "Entregas programadas",
            description: "Coordina entregas regulares para tu negocio"
        },
        {
            icon: <FaHandshake />,
            title: "Alianzas comerciales",
            description: "Conviértete en nuestro distribuidor autorizado"
        },
        {
            icon: <FaComments />,
            title: "Consultas generales",
            description: "Preguntas sobre productos, precios y disponibilidad"
        }
    ];

    // Efectos de animación
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Función para abrir WhatsApp con mensaje predefinido
    const openWhatsApp = () => {
        const message = encodeURIComponent(
            "¡Hola! Me interesa contactar con Distribuidora Huevos La Rural. " +
            "¿Podrían brindarme información sobre sus productos y servicios?"
        );
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        // Sección principal de introducción al contacto
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 mt-16" aria-labelledby="contact-title">
            <div className="container mx-auto px-4 md:px-6">

                {/* Encabezado principal */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h1 id="contact-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6">
                        ¡Contáctanos!
                    </h1>
                    <h2 className="text-xl md:text-2xl text-amber-600 mb-8">
                        Estamos aquí para atenderte - {Data.contacto.horarios_atencion}
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        En <strong>Distribuidora Huevos La Rural</strong> valoramos la comunicación directa con nuestros clientes.
                        Tenemos múltiples canales para que puedas contactarnos de la manera que te resulte más cómoda.
                        <mark className="bg-amber-200 px-2 py-1 rounded"> ¡Tu satisfacción es nuestra prioridad!</mark>
                    </p>
                </motion.div>

                {/* Grid de métodos de contacto */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`${method.bgLight} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                            onClick={method.action}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Icono del método de contacto */}
                            <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} text-white rounded-full mb-4 text-2xl`}>
                                {method.icon}
                            </div>

                            {/* Información del método */}
                            <h3 className={`text-xl font-bold ${method.textColor} mb-2`}>
                                {method.title}
                            </h3>
                            <p className="text-gray-600 font-medium mb-2">
                                {method.description}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {method.detail}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Razones para contactarnos */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
                        ¿Por qué contactarnos?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactReasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 text-white rounded-full">
                                        {reason.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-amber-700 mb-2">
                                        {reason.title}
                                    </h4>
                                    <p className="text-gray-600">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Llamada a la acción final */}
                <motion.div
                    className="text-center mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="bg-amber-800 text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            ¿Listo para hacer tu pedido?
                        </h3>
                        <p className="text-amber-100 text-lg mb-6">
                            No esperes más. Contáctanos ahora y disfruta de huevos frescos y de calidad.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* Botón WhatsApp */}
                            <motion.button
                                onClick={openWhatsApp}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaWhatsapp className="text-xl" />
                                Escribir por WhatsApp
                            </motion.button>

                            {/* Botón llamar */}
                            <motion.button
                                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                                className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPhone className="text-xl" />
                                Llamar Ahora
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Introduction;