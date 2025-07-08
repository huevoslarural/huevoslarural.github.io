// src/app/Navegation.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

import Data from "./constants.json";
import './Utils/Loaders/CSS/loader_02.css';





function Navegation() {
    // Estado para controlar el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Estado para controlar el scroll y cambiar el estilo del navbar
    const [isScrolled, setIsScrolled] = useState(false);
    // Estado para manejar la carga del logo
    const [logoLoaded, setLogoLoaded] = useState(false);
    // Estado para manejar el loader
    const [isLoading, setIsLoading] = useState(true);
    // Estado para manejar errores de carga
    const [error, setError] = useState(null);

    // Efecto para hacer fetch del logo desde Data.logos.favicon
    useEffect(() => {
        const fetchLogo = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Precargar el logo desde la URL del JSON
                const img = new Image();
                img.onload = () => {
                    setLogoLoaded(true);
                    setIsLoading(false);
                };
                img.onerror = () => {
                    setError('Error al cargar el logo');
                    setIsLoading(false);
                };
                img.src = Data.logos.favicon;

            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchLogo();
    }, []);

    // Efecto para detectar el scroll y cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Efecto para simular el loader inicial
    useEffect(() => {
        // Removido el timer ya que ahora usamos el fetching real
    }, []);

    // Función para alternar el menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Función para cerrar el menú móvil al hacer click en un enlace
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Función para manejar la carga del logo (ya no es necesaria)
    const handleLogoLoad = () => {
        // Esta función ya no es necesaria ya que manejamos la carga en el useEffect
    };

    // Enlaces de navegación
    const navigationLinks = [
        { href: '/contacto', label: 'Contacto', isPrimary: false },
        { href: '/info', label: 'Sobre nosotros', isPrimary: false },
        { href: '/educacion', label: 'Educación gratis', isPrimary: false },
        { href: '/ordenar', label: 'Ordenar ahora', isPrimary: true }
    ];

    // Variantes de animación para el menú móvil
    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Variantes de animación para los elementos del menú móvil
    const mobileItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    // Función para calcular el scale automático del loader
    const calculateLoaderScale = () => {
        // Dimensiones del contenedor circular
        const containerSize = 40; // 10 * 4 (w-10) para mobile, ajustaremos para desktop
        const containerSizeDesktop = 48; // 12 * 4 (w-12) para desktop

        // Dimensiones base del loader (según tu CSS)
        const loaderWidth = 120; // width del loader
        const loaderHeight = 70; // height aproximado considerando el ::after

        // Calcular el scale necesario para que quepa completamente
        const scaleForWidth = containerSize / loaderWidth;
        const scaleForHeight = containerSize / loaderHeight;
        const scaleMobile = Math.min(scaleForWidth, scaleForHeight) * 0.8; // 0.8 para dar margen

        const scaleForWidthDesktop = containerSizeDesktop / loaderWidth;
        const scaleForHeightDesktop = containerSizeDesktop / loaderHeight;
        const scaleDesktop = Math.min(scaleForWidthDesktop, scaleForHeightDesktop) * 0.8;

        return { mobile: scaleMobile, desktop: scaleDesktop };
    };

    // Componente de loader personalizado con escalado automático
    const LogoLoader = ({ isMobile = true }) => {
        const scales = calculateLoaderScale();
        const scale = isMobile ? scales.mobile : scales.desktop;

        return (
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden">
                <div
                    className="loader"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: 'center'
                    }}
                ></div>
            </div>
        );
    };

    // Componente de error para el logo
    const LogoError = () => (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-red-300 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-xs font-bold">!</span>
            </div>
        </div>
    );

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-200'
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo y nombre de la empresa */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                        <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isLoading ? (
                                <LogoLoader isMobile={true} />
                            ) : error ? (
                                <LogoError />
                            ) : logoLoaded ? (
                                <img
                                    src={Data.logos.favicon}
                                    alt="Huevos La Rural Logo"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <LogoLoader isMobile={true} />
                            )}
                        </motion.div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg md:text-xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
                                Huevos La Rural
                            </h1>
                            <p className="text-xs md:text-sm text-amber-600 leading-tight">
                                Distribuidora
                            </p>
                        </div>
                    </Link>

                    {/* Navegación de escritorio */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-4">
                        {navigationLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <motion.div
                                    className={`px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 ${link.isPrimary
                                            ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl'
                                            : 'text-amber-800 hover:text-amber-900 hover:bg-amber-50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    role="button"
                                    aria-label={`Ir a ${link.label}`}
                                >
                                    {link.label}
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Botón del menú móvil */}
                    <motion.button
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-amber-800 hover:bg-amber-50 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="text-xl" />
                        ) : (
                            <FaBars className="text-xl" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white border-t border-amber-200 shadow-lg"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col gap-2">
                                {navigationLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        variants={mobileItemVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={link.href} onClick={closeMobileMenu}>
                                            <div
                                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${link.isPrimary
                                                        ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-md'
                                                        : 'text-amber-800 hover:text-amber-900 hover:bg-amber-50'
                                                    }`}
                                                role="button"
                                                aria-label={`Ir a ${link.label}`}
                                            >
                                                {link.label}
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay para cerrar el menú móvil al hacer click fuera */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navegation;