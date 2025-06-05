// src/app/Footer.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaEgg,
    FaClock,
    FaShippingFast
} from 'react-icons/fa';
import Link from 'next/link';

import Data from "./constants.json";





function Footer() {
    const contactInfo = {
        phone: Data.contacto.telefono_string,
        whatsapp: Data.contacto.telefono_string,
        email: Data.contacto.email_string,
        address: Data.contacto.ubicacion,
        hours: Data.contacto.horarios_atencion
    };

    // Servicios destacados
    const services = [
        { icon: <FaEgg />, text: "Huevos frescos diarios" },
        { icon: <FaShippingFast />, text: "Envíos por mayoreo" },
        { icon: <FaClock />, text: "Horarios flexibles" }
    ];

    // Efectos de animación
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    // Función para abrir WhatsApp
    const openWhatsApp = () => {
        const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus huevos frescos. ¿Podrían brindarme información sobre precios y disponibilidad?");
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        // Footer principal con fondo amber
        <footer className="bg-amber-800 text-white" role="contentinfo">
            {/* Sección principal del footer */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Columna 1: Información de la empresa */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-6 lg:col-span-1"
                    >
                        <h3 className="text-2xl font-bold text-amber-200 mb-6">
                            Distribuidora Huevos La Rural
                        </h3>
                        <p className="text-amber-100 leading-relaxed text-lg">
                            Tu mejor opción para <strong>huevos frescos y de calidad</strong> en El Salvador.
                            Directo de la granja a tu mesa.
                        </p>

                        {/* Servicios destacados */}
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-3 text-amber-100 bg-amber-700/30 p-3 rounded-lg">
                                    <span className="text-amber-300 text-xl" aria-hidden="true">
                                        {service.icon}
                                    </span>
                                    <span className="text-base font-medium">{service.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Columna 2: Información de contacto */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-amber-200 mb-6">
                            Información de Contacto
                        </h3>
                        <div className="space-y-4">
                            {/* Teléfono */}
                            <div className="flex items-center gap-4 bg-amber-700/30 p-4 rounded-lg">
                                <FaPhone className="text-amber-300 text-xl" aria-hidden="true" />
                                <div>
                                    <p className="text-amber-200 text-sm font-medium">Teléfono</p>
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="text-amber-100 hover:text-amber-200 transition-colors duration-300 text-lg"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4 bg-amber-700/30 p-4 rounded-lg">
                                <FaEnvelope className="text-amber-300 text-xl" aria-hidden="true" />
                                <div>
                                    <p className="text-amber-200 text-sm font-medium">Email</p>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-amber-100 hover:text-amber-200 transition-colors duration-300 text-lg"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Dirección */}
                            <div className="flex items-start gap-4 bg-amber-700/30 p-4 rounded-lg">
                                <FaMapMarkerAlt className="text-amber-300 text-xl mt-1" aria-hidden="true" />
                                <div>
                                    <p className="text-amber-200 text-sm font-medium">Ubicación</p>
                                    <span className="text-amber-100 text-lg">
                                        {contactInfo.address}
                                    </span>
                                </div>
                            </div>

                            {/* Horarios */}
                            <div className="flex items-start gap-4 bg-amber-700/30 p-4 rounded-lg">
                                <FaClock className="text-amber-300 text-xl mt-1" aria-hidden="true" />
                                <div>
                                    <p className="text-amber-200 text-sm font-medium">Horarios de Atención</p>
                                    <span className="text-amber-100 text-lg">
                                        {contactInfo.hours}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna 3: Botones de acción */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-amber-200 mb-6">
                            ¡Contáctanos Ahora!
                        </h3>

                        {/* Botón de contacto general */}
                        <Link href="/contacto">
                            <motion.div
                                className="w-full bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-center text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                role="button"
                                aria-label="Ir a la página de contacto"
                            >
                                📞 Página de Contacto
                            </motion.div>
                        </Link>

                        {/* Botón de WhatsApp */}
                        <motion.button
                            onClick={openWhatsApp}
                            className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Contactar por WhatsApp"
                        >
                            <FaWhatsapp className="text-2xl" aria-hidden="true" />
                            Escribir por WhatsApp
                        </motion.button>

                        {/* Mensaje adicional */}
                        <div className="bg-amber-700/30 p-4 rounded-lg text-center">
                            <p className="text-amber-100 text-sm leading-relaxed">
                                <strong>¿Necesitas huevos frescos?</strong><br />
                                Contáctanos y te atenderemos de inmediato.
                                Tenemos disponibilidad todos los días.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Sección inferior del footer */}
            <div className="border-t border-amber-700">
                <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-amber-200 text-sm text-center md:text-left">
                            <p>
                                © {new Date().getFullYear()} <strong>Distribuidora Huevos La Rural</strong>.
                                Todos los derechos reservados.
                            </p>
                        </div>

                        {/* Enlaces legales */}
                        <div className="flex gap-4 text-sm">
                            <Link
                                href="/privacidad"
                                className="text-amber-200 hover:text-amber-100 transition-colors duration-300"
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="/terminos"
                                className="text-amber-200 hover:text-amber-100 transition-colors duration-300"
                            >
                                Términos de Servicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón flotante de WhatsApp (opcional) */}
            <motion.button
                onClick={openWhatsApp}
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                aria-label="Botón flotante de WhatsApp"
            >
                <FaWhatsapp className="text-2xl" aria-hidden="true" />
            </motion.button>
        </footer>
    );
}

export default Footer;