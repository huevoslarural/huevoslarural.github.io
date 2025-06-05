// src/app/ordenar/Components/Stock.jsx
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
    FaChartLine
} from 'react-icons/fa';





function Stock() {
    // Estados para el manejo de datos y carga
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    // URLs de la base de datos JSON (raw file y alternativas)
    const DB_URLS = [
        'https://raw.githubusercontent.com/hueverialarural/db/main/db.json',
        'https://api.github.com/repos/hueverialarural/db/contents/db.json'
    ];

    // Función para obtener los datos del stock
    const fetchStockData = async () => {
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
                    stock: {
                        cartones_tam_mediano: 25,
                        cartones_tam_grande: 120,
                        cartones_tam_extragrande: 15,
                        cartones_tam_jumbo: 8
                    }
                };

                // Mostrar advertencia al usuario
                setError('Mostrando datos de ejemplo. Verifique su conexión a internet.');
            }

            // Verificar que los datos tengan la estructura esperada
            if (!data || !data.stock) {
                throw new Error('Estructura de datos inválida: falta la propiedad "stock"');
            }

            setStockData(data.stock);
            setLastUpdated(new Date());

        } catch (err) {
            console.error('Error fetching stock data:', err);
            setError(`Error de conexión: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Cargar datos al montar el componente
    useEffect(() => {
        fetchStockData();

        // Actualizar datos cada 5 minutos
        const interval = setInterval(fetchStockData, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    // Función para calcular totales
    const calculateTotals = (stock) => {
        if (!stock) return { totalCartones: 0, totalCajas: 0, totalHuevos: 0 };

        const totalCartones = Object.values(stock).reduce((sum, cantidad) => sum + cantidad, 0);
        const totalCajas = Math.floor(totalCartones / 12);
        const totalHuevos = totalCartones * 30;

        return { totalCartones, totalCajas, totalHuevos };
    };

    // Configuración mejorada de información de tamaños con gradientes y mejor diseño
    const sizeInfo = {
        cartones_tam_mediano: {
            label: 'Mediano',
            icon: '🥚',
            gradient: 'from-blue-400 to-blue-600',
            bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
            borderColor: 'border-blue-200',
            textColor: 'text-blue-800',
            iconBg: 'bg-blue-500',
            description: 'Ideal para familias pequeñas'
        },
        cartones_tam_grande: {
            label: 'Grande',
            icon: '🥚',
            gradient: 'from-green-400 to-green-600',
            bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
            borderColor: 'border-green-200',
            textColor: 'text-green-800',
            iconBg: 'bg-green-500',
            description: 'El tamaño más popular'
        },
        cartones_tam_extragrande: {
            label: 'Extra Grande',
            icon: '🥚',
            gradient: 'from-orange-400 to-orange-600',
            bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
            borderColor: 'border-orange-200',
            textColor: 'text-orange-800',
            iconBg: 'bg-orange-500',
            description: 'Para los más exigentes'
        },
        cartones_tam_jumbo: {
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

    // Efectos de animación mejorados
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

    // Función mejorada para determinar el estado de stock basado en cajas
    const getStockStatus = (cantidad) => {
        const cajas = Math.floor(cantidad / 12);
        if (cajas === 0) return 'agotado';
        if (cajas < 1) return 'critico';
        if (cajas < 5) return 'bajo';
        if (cajas < 15) return 'medio';
        return 'alto';
    };

    // Componente de tarjeta de stock individual mejorado
    const StockCard = ({ type, cantidad, info, index }) => {
        const status = getStockStatus(cantidad);
        const cajas = Math.floor(cantidad / 12);
        const huevos = cantidad * 30;

        const statusConfig = {
            agotado: {
                bg: 'bg-gradient-to-br from-red-50 to-red-100',
                border: 'border-red-300',
                icon: <FaExclamationTriangle className="text-red-600" />,
                text: 'Agotado',
                textColor: 'text-red-700'
            },
            critico: {
                bg: 'bg-gradient-to-br from-red-50 to-orange-50',
                border: 'border-red-200',
                icon: <FaExclamationTriangle className="text-red-500" />,
                text: 'Stock Crítico',
                textColor: 'text-red-600'
            },
            bajo: {
                bg: 'bg-gradient-to-br from-yellow-50 to-orange-50',
                border: 'border-yellow-200',
                icon: <FaInfoCircle className="text-yellow-600" />,
                text: 'Stock Bajo',
                textColor: 'text-yellow-700'
            },
            medio: {
                bg: 'bg-gradient-to-br from-orange-50 to-yellow-50',
                border: 'border-orange-200',
                icon: <FaInfoCircle className="text-orange-600" />,
                text: 'Stock Medio',
                textColor: 'text-orange-700'
            },
            alto: {
                bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
                border: 'border-green-200',
                icon: <FaCheckCircle className="text-green-600" />,
                text: 'Disponible',
                textColor: 'text-green-700'
            }
        };

        const currentStatus = statusConfig[status];

        return (
            <motion.div
                variants={slideIn}
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`relative overflow-hidden p-6 rounded-2xl border-2 ${currentStatus.bg} ${currentStatus.border} shadow-lg hover:shadow-xl transition-all duration-500 group`}
            >
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

                {/* Header mejorado de la tarjeta */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-2xl">{info.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{info.label}</h3>
                            <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {currentStatus.icon}
                        <span className={`text-xs font-semibold ${currentStatus.textColor} text-center`}>
                            {currentStatus.text}
                        </span>
                    </div>
                </div>

                {/* Cantidad principal destacada - AHORA EN CAJAS */}
                <div className="text-center mb-6">
                    <div className="relative">
                        <span className="text-5xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                            {cajas}
                        </span>
                        <span className="text-lg font-semibold text-gray-600 ml-2">cajas</span>
                    </div>
                </div>

                {/* Información de equivalencias */}
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <FaBoxOpen className="text-amber-600" />
                            <span className="text-gray-700 font-medium">Su equivalente en cartones:</span>
                        </div>
                        <span className="font-bold text-lg text-amber-800">{cantidad}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <FaEgg className="text-amber-600" />
                            <span className="text-gray-700 font-medium">Su equivalente en huevos (unidad):</span>
                        </div>
                        <span className="font-bold text-lg text-amber-800">{huevos.toLocaleString()}</span>
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
                        <FaChartLine className="text-amber-600" />
                        <span className="text-amber-700 font-semibold">Stock en Tiempo Real</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Inventario Disponible
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Consulta nuestro stock actualizado de huevos frescos
                    </p>
                </motion.div>

                {/* Contenido principal */}
                {loading && !stockData ? (
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
                        <p className="text-amber-700 text-xl font-semibold mt-6">Cargando información de stock...</p>
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
                            onClick={fetchStockData}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Intentar de nuevo
                        </button>
                    </motion.div>
                ) : stockData ? (
                    <>
                        {/* Resumen general mejorado */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 mb-12 border border-white/20"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
                                    Resumen General
                                </h2>
                                <p className="text-gray-600">Vista rápida de todo nuestro inventario</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                                {(() => {
                                    const totals = calculateTotals(stockData);
                                    const summaryItems = [
                                        {
                                            icon: FaShoppingCart,
                                            label: 'Total Cajas',
                                            value: totals.totalCajas,
                                            gradient: 'from-green-500 to-green-600',
                                            bg: 'from-green-50 to-green-100'
                                        },
                                        {
                                            icon: FaBoxOpen,
                                            label: 'Total Cartones',
                                            value: totals.totalCartones,
                                            gradient: 'from-blue-500 to-blue-600',
                                            bg: 'from-blue-50 to-blue-100'
                                        },
                                        {
                                            icon: FaEgg,
                                            label: 'Total Huevos',
                                            value: totals.totalHuevos.toLocaleString(),
                                            gradient: 'from-amber-500 to-orange-500',
                                            bg: 'from-amber-50 to-orange-100'
                                        }
                                    ];

                                    return summaryItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            className={`text-center p-6 bg-gradient-to-br ${item.bg} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
                                        >
                                            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg`}>
                                                <item.icon className="text-white text-2xl" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-600 mb-2">{item.label}</p>
                                            <p className="text-3xl font-black text-gray-800">{item.value}</p>
                                        </motion.div>
                                    ));
                                })()}
                            </div>
                        </motion.div>

                        {/* Grid de stock por tamaño mejorado */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12"
                        >
                            {Object.entries(stockData).map(([type, cantidad], index) => (
                                <StockCard
                                    key={type}
                                    type={type}
                                    cantidad={cantidad}
                                    info={sizeInfo[type]}
                                    index={index}
                                />
                            ))}
                        </motion.div>

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

export default Stock;