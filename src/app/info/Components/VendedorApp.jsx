// src/app/info/Components/VendedorApp.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaDownload,
    FaAndroid,
    FaApple,
    FaGithub,
    FaShoppingCart,
    FaBarcode,
    FaUsers,
    FaChartLine,
    FaMobile,
    FaBoxOpen,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaSpinner
} from 'react-icons/fa';





function VendedorApp() {
    // Estado para las releases de GitHub
    const [releases, setReleases] = useState([]);
    const [latestRelease, setLatestRelease] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado para las versiones procesadas
    const [appVersions, setAppVersions] = useState({
        android: {
            available: false,
            version: null,
            downloadUrl: null,
            fileSize: null,
            fileName: null
        },
        ios: {
            available: false,
            version: null,
            downloadUrl: null,
            fileSize: null,
            fileName: null
        }
    });

    // Configuración del repositorio
    const GITHUB_REPO = 'rodolfocasan/huevos-larural-vendedor-app';
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

    // Función para obtener las releases de GitHub
    const fetchGitHubReleases = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(GITHUB_API_URL);

            if (!response.ok) {
                throw new Error(`Error al obtener releases: ${response.status}`);
            }

            const data = await response.json();

            if (data.length === 0) {
                throw new Error('No se encontraron releases');
            }

            setReleases(data);
            setLatestRelease(data[0]); // La primera release es la más reciente

            // Procesar la release más reciente para extraer archivos
            processLatestRelease(data[0]);

        } catch (err) {
            console.error('Error fetching GitHub releases:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Función para procesar la release más reciente y extraer archivos por plataforma
    const processLatestRelease = (release) => {
        const newAppVersions = {
            android: {
                available: false,
                version: null,
                downloadUrl: null,
                fileSize: null,
                fileName: null
            },
            ios: {
                available: false,
                version: null,
                downloadUrl: null,
                fileSize: null,
                fileName: null
            }
        };

        // Buscar archivos Android (.apk)
        const androidAsset = release.assets.find(asset =>
            asset.name.toLowerCase().includes('.apk') ||
            asset.name.toLowerCase().includes('android') ||
            asset.content_type === 'application/vnd.android.package-archive'
        );

        if (androidAsset) {
            newAppVersions.android = {
                available: true,
                version: release.tag_name || release.name,
                downloadUrl: androidAsset.browser_download_url,
                fileSize: formatFileSize(androidAsset.size),
                fileName: androidAsset.name
            };
        }

        // Buscar archivos iOS (.ipa)
        const iosAsset = release.assets.find(asset =>
            asset.name.toLowerCase().includes('.ipa') ||
            asset.name.toLowerCase().includes('ios') ||
            asset.content_type === 'application/octet-stream'
        );

        if (iosAsset) {
            newAppVersions.ios = {
                available: true,
                version: release.tag_name || release.name,
                downloadUrl: iosAsset.browser_download_url,
                fileSize: formatFileSize(iosAsset.size),
                fileName: iosAsset.name
            };
        }

        setAppVersions(newAppVersions);
    };

    // Función para formatear el tamaño del archivo
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // useEffect para cargar las releases al montar el componente
    useEffect(() => {
        fetchGitHubReleases();
    }, []);

    // Características principales de la aplicación
    const features = [
        { icon: <FaShoppingCart />, title: "Control de Ventas", description: "Registra y gestiona todas tus ventas diarias de forma fácil y rápida" },
        { icon: <FaBarcode />, title: "Inventario Digital", description: "Lleva el control exacto de tu inventario de huevos en tiempo real" },
        { icon: <FaUsers />, title: "Gestión de Clientes", description: "Administra la información de tus clientes y su historial de compras" },
        { icon: <FaChartLine />, title: "Reportes y Estadísticas", description: "Visualiza reportes detallados de tus ventas y rendimiento" },
        { icon: <FaCalendarAlt />, title: "Programación de Entregas", description: "Organiza y programa las entregas a tus clientes" },
        { icon: <FaBoxOpen />, title: "Control Logístico", description: "Gestiona el stock, entregas y devoluciones de manera eficiente" }
    ];

    // Efectos de animación
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
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

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Función para abrir GitHub releases
    const openGitHubReleases = () => {
        window.open(`https://github.com/${GITHUB_REPO}/releases`, '_blank');
    };

    // Función para descargar la aplicación
    const downloadApp = (platform) => {
        const version = appVersions[platform];
        if (version && version.available && version.downloadUrl) {
            window.open(version.downloadUrl, '_blank');
        }
    };

    // Función para reintentar la carga
    const retryFetch = () => {
        fetchGitHubReleases();
    };

    return (
        // Sección principal de la aplicación para vendedores
        <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100 mt-16" aria-labelledby="vendedor-app-title">
            <div className="container mx-auto px-4 md:px-6">

                {/* Encabezado principal */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <FaMobile className="text-5xl text-amber-600" aria-hidden="true" />
                        <h1 id="vendedor-app-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800">
                            ¿Eres nuestro distribuidor?
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl text-amber-600 mb-4 font-semibold">
                        Presentamos: Vendedor App
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        La aplicación oficial desarrollada para nuestros <strong>vendedores y distribuidores</strong>.
                        Una herramienta completa y gratuita para llevar el <em>control logístico</em> de cada venta
                        de manera profesional y eficiente.
                    </p>
                </motion.div>

                {/* Grid de características */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-3xl text-amber-500" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-amber-800">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección de descarga */}
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                            Descarga la Aplicación
                        </h3>
                        <p className="text-lg text-gray-700">
                            Obtén la aplicación oficial y comienza a optimizar tu trabajo hoy mismo
                        </p>

                        {/* Mostrar información de la versión actual si está disponible */}
                        {latestRelease && !loading && (
                            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-amber-800">
                                    <strong>Versión actual:</strong> {latestRelease.tag_name || latestRelease.name}
                                </p>
                                {latestRelease.published_at && (
                                    <p className="text-amber-700 text-sm">
                                        Publicada: {new Date(latestRelease.published_at).toLocaleDateString('es-ES')}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Estado de carga */}
                    {loading && (
                        <div className="text-center py-12">
                            <FaSpinner className="text-4xl text-amber-600 animate-spin mx-auto mb-4" aria-hidden="true" />
                            <p className="text-lg text-gray-700">Cargando información de versiones...</p>
                        </div>
                    )}

                    {/* Estado de error */}
                    {error && !loading && (
                        <div className="text-center py-12">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                                <p className="text-red-700 mb-4">
                                    <strong>Error:</strong> {error}
                                </p>
                                <motion.button
                                    onClick={retryFetch}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Reintentar
                                </motion.button>
                            </div>
                        </div>
                    )}

                    {/* Botones de descarga */}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            {/* Descarga para Android */}
                            <motion.div
                                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <FaAndroid className="text-4xl text-green-600" aria-hidden="true" />
                                    <h4 className="text-2xl font-bold text-green-800">Android</h4>
                                </div>

                                {appVersions.android.available ? (
                                    <>
                                        <div className="text-center mb-4">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <FaCheckCircle className="text-green-600" aria-hidden="true" />
                                                <span className="text-green-800 font-semibold">Disponible</span>
                                            </div>
                                            <p className="text-gray-700">
                                                <strong>Versión:</strong> {appVersions.android.version}
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Tamaño:</strong> {appVersions.android.fileSize}
                                            </p>
                                            {appVersions.android.fileName && (
                                                <p className="text-gray-600 text-sm">
                                                    {appVersions.android.fileName}
                                                </p>
                                            )}
                                        </div>

                                        <motion.button
                                            onClick={() => downloadApp('android')}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label="Descargar aplicación para Android"
                                        >
                                            <FaDownload aria-hidden="true" />
                                            Descargar APK
                                        </motion.button>
                                    </>
                                ) : (
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <FaTimesCircle className="text-gray-500" aria-hidden="true" />
                                            <span className="text-gray-600 font-semibold">No disponible para esta plataforma.</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Descarga para iOS */}
                            <motion.div
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <FaApple className="text-4xl text-blue-600" aria-hidden="true" />
                                    <h4 className="text-2xl font-bold text-blue-800">iOS</h4>
                                </div>

                                {appVersions.ios.available ? (
                                    <>
                                        <div className="text-center mb-4">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <FaCheckCircle className="text-blue-600" aria-hidden="true" />
                                                <span className="text-blue-800 font-semibold">Disponible</span>
                                            </div>
                                            <p className="text-gray-700">
                                                <strong>Versión:</strong> {appVersions.ios.version}
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Tamaño:</strong> {appVersions.ios.fileSize}
                                            </p>
                                            {appVersions.ios.fileName && (
                                                <p className="text-gray-600 text-sm">
                                                    {appVersions.ios.fileName}
                                                </p>
                                            )}
                                        </div>

                                        <motion.button
                                            onClick={() => downloadApp('ios')}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label="Descargar aplicación para iOS"
                                        >
                                            <FaDownload aria-hidden="true" />
                                            Descargar
                                        </motion.button>
                                    </>
                                ) : (
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <FaTimesCircle className="text-gray-500" aria-hidden="true" />
                                            <span className="text-gray-600 font-semibold">No disponible para esta plataforma.</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}

                    {/* Enlace a versiones anteriores */}
                    {!loading && !error && (
                        <div className="text-center mt-10">
                            <motion.button
                                onClick={openGitHubReleases}
                                className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Ver versiones anteriores en GitHub"
                            >
                                <FaGithub className="text-xl" aria-hidden="true" />
                                Versiones anteriores
                            </motion.button>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default VendedorApp;