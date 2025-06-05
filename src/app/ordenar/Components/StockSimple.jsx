// src/app/ordenar/Components/StockSimple.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaEgg,
    FaBoxOpen,
    FaShoppingCart,
    FaSync,
    FaExclamationTriangle,
    FaCheckCircle,
    FaInfoCircle,
    FaClock,
    FaDollarSign,
    FaStore,
    FaUsers
} from 'react-icons/fa';

function StockSimple() {
    // Estados para el manejo de datos y carga
    const [preciosData, setPreciosData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    // URLs de la base de datos JSON (raw file y alternativas)
    const DB_URLS = [
        'https://raw.githubusercontent.com/hueverialarural/db/main/db.json',
        'https://api.github.com/repos/hueverialarural/db/contents/db.json'
    ];

    // Función para obtener los datos de precios
    const fetchPreciosData = async () => {
        try {
            setLoading(true);
            setError(null);

            // Intentar con la URL principal primero
            let data = null;
            let lastError = null;

            // Método 1: Fetch directo del raw file
            try {
                const timestamp = new Date().getTime();
                const urlWithTimestamp = `${DB_URLS[0]}?t=${timestamp}`;

                const response = await fetch(urlWithTimestamp, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                    },
                    cache: 'no-store'
                });

                if (response.ok) {
                    data = await response.json();
                }
            } catch (err) {
                lastError = err;
                console.warn('Método 1 falló:', err.message);
            }

            // Método 2: Si falla, usar datos mock temporales
            if (!data) {
                console.warn('Usando datos mock temporales debido a error de conexión:', lastError?.message);

                // Datos de ejemplo basados en tu estructura
                data = {
                    precios: {
                        mayoreo: {
                            precio_caja_mediano: "$42.00",
                            precio_caja_grande: "$48.00",
                            precio_caja_extragrande: "$54.00",
                            precio_caja_jumbo: "$60.00"
                        },
                        menudeo: {
                            precio_carton_mediano: "$3.50",
                            precio_carton_grande: "$4.00",
                            precio_carton_extragrande: "$4.50",
                            precio_carton_jumbo: "$5.00"
                        }
                    }
                };

                // Mostrar advertencia al usuario
                setError('Mostrando precios de ejemplo. Verifique su conexión a internet.');
            }

            // Verificar que los datos tengan la estructura esperada
            if (!data || !data.precios) {
                throw new Error('Estructura de datos inválida: falta la propiedad "precios"');
            }

            setPreciosData(data.precios);
            setLastUpdated(new Date());

        } catch (err) {
            console.error('Error fetching precios data:', err);
            setError(`Error de conexión: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Cargar datos al montar el componente
    useEffect(() => {
        fetchPreciosData();

        // Actualizar datos cada 5 minutos
        const interval = setInterval(fetchPreciosData, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    // Configuración de información de tamaños con gradientes y mejor diseño
    const sizeInfo = {
        mediano: {
            label: 'Mediano',
            icon: '🥚',
            gradient: 'from-blue-400 to-blue-600',
            bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
            borderColor: 'border-blue-200',
            textColor: 'text-blue-800',
            iconBg: 'bg-blue-500',
            description: 'Ideal para familias pequeñas'
        },
        grande: {
            label: 'Grande',
            icon: '🥚',
            gradient: 'from-green-400 to-green-600',
            bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
            borderColor: 'border-green-200',
            textColor: 'text-green-800',
            iconBg: 'bg-green-500',
            description: 'El tamaño más popular'
        },
        extragrande: {
            label: 'Extra Grande',
            icon: '🥚',
            gradient: 'from-orange-400 to-orange-600',
            bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
            borderColor: 'border-orange-200',
            textColor: 'text-orange-800',
            iconBg: 'bg-orange-500',
            description: 'Para los más exigentes'
        },
        jumbo: {
            label: 'Jumbo',
            icon: '🥚',
            gradient: 'from-red-400 to-red-600',
            bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
            borderColor: 'border-red-200',
            textColor: 'text-red-800',
            iconBg: 'bg-red-500',
            description: 'Tamaño premium'
        }
    };

    // Efectos de animación
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const slideIn = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Componente de tarjeta de precios individual
    const PrecioCard = ({ size, precioMayoreo, precioMenudeo, info, index }) => {
        return (
            <motion.div
                variants={slideIn}
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`relative overflow-hidden p-6 rounded-2xl border-2 ${info.bgColor} ${info.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 group`}
            >
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                {/* Header de la tarjeta */}
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-2xl">{info.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{info.label}</h3>
                            <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                    </div>
                </div>

                {/* Precios por tipo de venta */}
                <div className="space-y-4">
                    {/* Precio Mayoreo */}
                    <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <FaUsers className="text-white text-sm" />
                                </div>
                                <div>
                                    <p className="font-bold text-purple-700">MAYOREO</p>
                                    <p className="text-xs text-purple-600">Por caja (12 cartones)</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-black text-purple-800">{precioMayoreo}</span>
                            </div>
                        </div>
                    </div>

                    {/* Precio Menudeo */}
                    <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-white/50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                                    <FaStore className="text-white text-sm" />
                                </div>
                                <div>
                                    <p className="font-bold text-amber-700">MENUDEO</p>
                                    <p className="text-xs text-amber-600">Por cartón (30 huevos)</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-black text-amber-800">{precioMenudeo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Render del componente principal
    return (
        <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen mt-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Header mejorado con mejor tipografía */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-12 lg:mb-16"
                >
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
                        <FaDollarSign className="text-amber-600" />
                        <span className="text-amber-700 font-semibold">Precios Actualizados</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Lista de Precios
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Consulta nuestros precios actualizados para mayoreo y menudeo
                    </p>
                </motion.div>

                {/* Contenido principal */}
                {loading && !preciosData ? (
                    // Estado de carga mejorado
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20"
                    >
                        <div className="relative">
                            <div className="w-20 h-20 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                            <div className="absolute inset-0 w-20 h-20 border-4 border-orange-300 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                        </div>
                        <p className="text-amber-700 text-xl font-semibold mt-6">Cargando información de precios...</p>
                        <p className="text-gray-600 text-sm mt-2">Esto puede tomar unos segundos</p>
                    </motion.div>
                ) : error ? (
                    // Estado de error mejorado
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-xl max-w-2xl mx-auto"
                    >
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaExclamationTriangle className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-800 mb-4">Error al cargar datos</h3>
                        <p className="text-red-600 mb-6 leading-relaxed">{error}</p>
                        <button
                            onClick={fetchPreciosData}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Intentar de nuevo
                        </button>
                    </motion.div>
                ) : preciosData ? (
                    <>
                        {/* Grid de precios por tamaño */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12"
                        >
                            {['mediano', 'grande', 'extragrande', 'jumbo'].map((size, index) => {
                                const precioMayoreo = preciosData.mayoreo[`precio_caja_${size}`];
                                const precioMenudeo = preciosData.menudeo[`precio_carton_${size}`];
                                
                                return (
                                    <PrecioCard
                                        key={size}
                                        size={size}
                                        precioMayoreo={precioMayoreo}
                                        precioMenudeo={precioMenudeo}
                                        info={sizeInfo[size]}
                                        index={index}
                                    />
                                );
                            })}
                        </motion.div>

                        {/* Sección de Información Importante */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                                    <FaInfoCircle className="text-amber-600" />
                                    Información Importante
                                </h3>
                            </div>

                            {/* Conversiones visuales mejoradas */}
                            <div className="max-w-4xl mx-auto">
                                {/* Primera fila: Caja → Cartones */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <FaShoppingCart className="text-white text-xl" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-blue-700">1</p>
                                            <p className="text-sm font-semibold text-blue-600">CAJA</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="hidden md:block text-blue-400">
                                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                                <path d="M5 10H35M35 10L25 5M35 10L25 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="md:hidden text-blue-400 rotate-90">
                                            <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                                                <path d="M10 5V35M10 35L5 25M10 35L15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-blue-600 font-bold text-lg">IGUAL A</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <FaBoxOpen className="text-white text-xl" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-blue-700">12</p>
                                            <p className="text-sm font-semibold text-blue-600">CARTONES</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Segunda fila: Cartón → Huevos */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <FaBoxOpen className="text-white text-xl" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-amber-700">1</p>
                                            <p className="text-sm font-semibold text-amber-600">CARTÓN</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="hidden md:block text-amber-400">
                                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                                <path d="M5 10H35M35 10L25 5M35 10L25 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="md:hidden text-amber-400 rotate-90">
                                            <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                                                <path d="M10 5V35M10 35L5 25M10 35L15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-amber-600 font-bold text-lg">IGUAL A</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <FaEgg className="text-white text-xl" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black text-amber-700">30</p>
                                            <p className="text-sm font-semibold text-amber-600">HUEVOS</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Información adicional */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                                <FaSync className="text-white animate-pulse" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-green-700">Actualización</p>
                                                <p className="text-green-600 text-sm">AUTOMÁTICA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                                                <FaCheckCircle className="text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-purple-700">Calidad</p>
                                                <p className="text-purple-600 text-sm">PREMIUM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fecha de actualización */}
                            {lastUpdated && (
                                <div className="mt-8 text-center">
                                    <div className="inline-flex items-center gap-3 bg-amber-100 rounded-full px-6 py-3">
                                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                                            <FaClock className="text-white text-sm" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs text-amber-600 font-medium">Última actualización</p>
                                            <p className="text-amber-800 font-bold text-sm">
                                                {lastUpdated.toLocaleDateString('es-SV', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })} • {lastUpdated.toLocaleTimeString('es-SV', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </>
                ) : null}
            </div>
        </section>
    );
}

export default StockSimple;