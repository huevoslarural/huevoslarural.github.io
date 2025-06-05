// src/app/Navegation.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaEgg } from 'react-icons/fa';





function Navegation() {
    // Estado para controlar el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Estado para controlar el scroll y cambiar el estilo del navbar
    const [isScrolled, setIsScrolled] = useState(false);

    // Efecto para detectar el scroll y cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para alternar el menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Función para cerrar el menú móvil al hacer click en un enlace
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Enlaces de navegación
    const navigationLinks = [
        { href: '/contacto', label: 'Contacto', isPrimary: false },
        { href: '/info', label: 'Sobre nosotros', isPrimary: false },
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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-200' 
                : 'bg-white/90 backdrop-blur-sm'
        }`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Logo y nombre de la empresa */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                        <motion.div 
                            className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEgg className="text-white text-lg md:text-xl" />
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
                                    className={`px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        link.isPrimary
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
                                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                                    link.isPrimary
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