// src/app/ordenar/Components/How.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaTruck,
    FaRoute,
    FaStore,
    FaClock,
    FaMapMarkerAlt,
    FaDollarSign,
    FaBox,
    FaCalendarAlt,
    FaUsers,
    FaShoppingCart,
    FaCheckCircle,
    FaStar
} from 'react-icons/fa';





function How() {
    // Efectos de animación optimizados para mejor rendimiento
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const slideInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    // Datos reorganizados para mejor comprensión
    const salesTypes = [
        {
            id: 1,
            title: "Venta por Ruta",
            subtitle: "🚚 Entrega GRATUITA",
            icon: <FaRoute />,
            mainColor: "from-emerald-500 to-emerald-600",
            lightColor: "from-emerald-50 to-emerald-100",
            borderColor: "border-emerald-200",
            textColor: "text-emerald-800",
            accentColor: "emerald",
            description: "La opción más económica para tu negocio",
            schedule: "Mié, Vie y Dom",
            minOrder: "1 caja",
            deliveryCost: "GRATIS",
            badge: "MÁS POPULAR",
            quickBenefits: [
                "Sin costo de entrega",
                "Días fijos",
                "Ideal para planificar"
            ],
            features: [
                { icon: <FaTruck />, text: "Entrega gratuita", highlight: true },
                { icon: <FaClock />, text: "3 días garantizados" },
                { icon: <FaBox />, text: "Solo 1 caja mínimo" },
                { icon: <FaMapMarkerAlt />, text: "A tu establecimiento" }
            ],
            benefits: "Perfecto para negocios que pueden planificar con anticipación. Ahorra dinero en envíos."
        },
        {
            id: 2,
            title: "Envío a Domicilio",
            subtitle: "📅 Fecha personalizada",
            icon: <FaCalendarAlt />,
            mainColor: "from-blue-500 to-blue-600",
            lightColor: "from-blue-50 to-blue-100",
            borderColor: "border-blue-200",
            textColor: "text-blue-800",
            accentColor: "blue",
            description: "Flexibilidad para emergencias",
            schedule: "Cualquier día",
            minOrder: "1 caja",
            deliveryCost: "Solo combustible",
            badge: "FLEXIBLE",
            quickBenefits: [
                "Horario personalizado",
                "Entregas urgentes",
                "Costo mínimo"
            ],
            features: [
                { icon: <FaCalendarAlt />, text: "Tú eliges la fecha", highlight: true },
                { icon: <FaClock />, text: "Ideal para emergencias" },
                { icon: <FaDollarSign />, text: "Solo pagas combustible" },
                { icon: <FaTruck />, text: "Servicio exclusivo" }
            ],
            benefits: "Ideal para eventos especiales o cuando necesitas huevos en momento específico."
        },
        {
            id: 3,
            title: "Comercio Móvil",
            subtitle: "🏪 Compra directa",
            icon: <FaStore />,
            mainColor: "from-orange-500 to-orange-600",
            lightColor: "from-orange-50 to-orange-100",
            borderColor: "border-orange-200",
            textColor: "text-orange-800",
            accentColor: "orange",
            description: "Venta directa en tu zona",
            schedule: "Ubicaciones rotativas",
            minOrder: "Por cartones",
            deliveryCost: "Sin envío",
            badge: "INMEDIATO",
            quickBenefits: [
                "Compra al instante",
                "Cartones sueltos",
                "Sin pedido mínimo"
            ],
            features: [
                { icon: <FaUsers />, text: "Atención cara a cara", highlight: true },
                { icon: <FaShoppingCart />, text: "Cantidades pequeñas" },
                { icon: <FaMapMarkerAlt />, text: "En zonas comerciales" },
                { icon: <FaDollarSign />, text: "Precios accesibles" }
            ],
            benefits: "Perfecto para pequeños comercios y compras inmediatas sin planificar."
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden" aria-labelledby="how-section-title">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Encabezado optimizado */}
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4">
                        <FaStar className="text-amber-500" />
                        <span className="text-sm font-medium text-amber-700">3 Formas de Obtener Tus Huevos</span>
                    </div>

                    <h2 id="how-section-title" className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        ¿Cómo Vendemos?
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Elige la modalidad que mejor se adapte a tu negocio.
                        <span className="font-semibold text-amber-700"> Cada una diseñada para diferentes necesidades.</span>
                    </p>

                    {/* Indicador visual de scrolling */}
                    <div className="flex justify-center mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid de tipos de venta optimizado para layout 3x1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-8">
                    {/* Primeras dos cards en desktop */}
                    {salesTypes.slice(0, 2).map((saleType, index) => (
                        <motion.article
                            key={saleType.id}
                            className={`bg-gradient-to-br ${saleType.lightColor} rounded-2xl shadow-lg overflow-hidden ${saleType.borderColor} border-2 relative group hover:shadow-xl transition-all duration-300 h-fit`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={slideInUp}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Badge destacado */}
                            <div className="absolute top-3 right-3 z-20">
                                <span className={`bg-gradient-to-r ${saleType.mainColor} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                    {saleType.badge}
                                </span>
                            </div>

                            {/* Encabezado compacto */}
                            <div className={`bg-gradient-to-r ${saleType.mainColor} text-white p-4 md:p-5 relative overflow-hidden`}>
                                {/* Patrón decorativo de fondo */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-8 translate-x-8"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="text-2xl md:text-3xl p-2 bg-white/20 rounded-xl backdrop-blur-sm" aria-hidden="true">
                                            {saleType.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-1">
                                                {saleType.title}
                                            </h3>
                                            <p className="text-sm md:text-base opacity-95 font-medium">
                                                {saleType.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Descripción principal */}
                                    <p className="text-sm md:text-base font-medium opacity-95 leading-relaxed">
                                        {saleType.description}
                                    </p>
                                </div>
                            </div>

                            {/* Contenido principal compacto */}
                            <div className="p-4 md:p-5">
                                {/* Beneficios rápidos en cards compactas */}
                                <div className="grid grid-cols-1 gap-2 mb-4">
                                    {saleType.quickBenefits.map((benefit, benefitIndex) => (
                                        <motion.div
                                            key={benefitIndex}
                                            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-white/50"
                                            initial={{ opacity: 0, y: 5 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.05) + (benefitIndex * 0.03) }}
                                        >
                                            <FaCheckCircle className={`text-${saleType.accentColor}-500 text-sm flex-shrink-0`} />
                                            <span className="text-gray-800 font-medium text-sm">
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Información clave compacta */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <motion.div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                        variants={scaleIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <FaClock className={`text-${saleType.accentColor}-500 text-lg mx-auto mb-1`} />
                                        <h4 className={`font-bold ${saleType.textColor} mb-1 text-xs uppercase tracking-wide`}>
                                            Disponibilidad
                                        </h4>
                                        <p className="text-gray-700 font-semibold text-xs">{saleType.schedule}</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                        variants={scaleIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 + 0.05 }}
                                    >
                                        <FaBox className={`text-${saleType.accentColor}-500 text-lg mx-auto mb-1`} />
                                        <h4 className={`font-bold ${saleType.textColor} mb-1 text-xs uppercase tracking-wide`}>
                                            Mínimo
                                        </h4>
                                        <p className="text-gray-700 font-semibold text-xs">{saleType.minOrder}</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                        variants={scaleIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                    >
                                        <FaDollarSign className={`text-${saleType.accentColor}-500 text-lg mx-auto mb-1`} />
                                        <h4 className={`font-bold ${saleType.textColor} mb-1 text-xs uppercase tracking-wide`}>
                                            Envío
                                        </h4>
                                        <p className="text-gray-700 font-semibold text-xs">{saleType.deliveryCost}</p>
                                    </motion.div>
                                </div>

                                {/* Características principales compactas */}
                                <div className="mb-4">
                                    <h4 className={`text-lg font-bold ${saleType.textColor} mb-3`}>
                                        Características Principales
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {saleType.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                className={`flex items-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border ${feature.highlight ? `border-${saleType.accentColor}-200 bg-gradient-to-r ${saleType.lightColor}` : 'border-white/50'} group hover:shadow-md transition-all duration-300`}
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (index * 0.05) + (featureIndex * 0.03) }}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <span className={`text-${saleType.accentColor}-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform`} aria-hidden="true">
                                                    {feature.icon}
                                                </span>
                                                <span className="text-gray-800 font-medium text-xs leading-snug">
                                                    {feature.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Beneficios finales compactos */}
                                <motion.div
                                    className={`bg-gradient-to-r ${saleType.lightColor} p-4 rounded-xl shadow-sm border-l-4 border-${saleType.accentColor}-400 relative overflow-hidden`}
                                    initial={{ opacity: 0, y: 5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 + 0.15 }}
                                >
                                    {/* Elemento decorativo */}
                                    <div className="absolute top-2 right-2 text-2xl opacity-20">
                                        💡
                                    </div>

                                    <h4 className={`text-base font-bold ${saleType.textColor} mb-2 flex items-center gap-2`}>
                                        <span className="text-lg">🎯</span>
                                        ¿Para quién es ideal?
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                        {saleType.benefits}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Tercera card centrada */}
                <div className="flex justify-center">
                    <motion.article
                        className={`bg-gradient-to-br ${salesTypes[2].lightColor} rounded-2xl shadow-lg overflow-hidden ${salesTypes[2].borderColor} border-2 relative group hover:shadow-xl transition-all duration-300 w-full lg:w-2/3 xl:w-1/2 h-fit`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={slideInUp}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -3 }}
                    >
                        {/* Badge destacado */}
                        <div className="absolute top-3 right-3 z-20">
                            <span className={`bg-gradient-to-r ${salesTypes[2].mainColor} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                {salesTypes[2].badge}
                            </span>
                        </div>

                        {/* Encabezado compacto */}
                        <div className={`bg-gradient-to-r ${salesTypes[2].mainColor} text-white p-4 md:p-5 relative overflow-hidden`}>
                            {/* Patrón decorativo de fondo */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-8 translate-x-8"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-2xl md:text-3xl p-2 bg-white/20 rounded-xl backdrop-blur-sm" aria-hidden="true">
                                        {salesTypes[2].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                                            {salesTypes[2].title}
                                        </h3>
                                        <p className="text-sm md:text-base opacity-95 font-medium">
                                            {salesTypes[2].subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Descripción principal */}
                                <p className="text-sm md:text-base font-medium opacity-95 leading-relaxed">
                                    {salesTypes[2].description}
                                </p>
                            </div>
                        </div>

                        {/* Contenido principal compacto */}
                        <div className="p-4 md:p-5">
                            {/* Beneficios rápidos en cards compactas */}
                            <div className="grid grid-cols-1 gap-2 mb-4">
                                {salesTypes[2].quickBenefits.map((benefit, benefitIndex) => (
                                    <motion.div
                                        key={benefitIndex}
                                        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-white/50"
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (benefitIndex * 0.03) }}
                                    >
                                        <FaCheckCircle className={`text-${salesTypes[2].accentColor}-500 text-sm flex-shrink-0`} />
                                        <span className="text-gray-800 font-medium text-sm">
                                            {benefit}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Información clave compacta */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <motion.div
                                    className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                    variants={scaleIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <FaClock className={`text-${salesTypes[2].accentColor}-500 text-lg mx-auto mb-1`} />
                                    <h4 className={`font-bold ${salesTypes[2].textColor} mb-1 text-xs uppercase tracking-wide`}>
                                        Disponibilidad
                                    </h4>
                                    <p className="text-gray-700 font-semibold text-xs">{salesTypes[2].schedule}</p>
                                </motion.div>

                                <motion.div
                                    className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                    variants={scaleIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 }}
                                >
                                    <FaBox className={`text-${salesTypes[2].accentColor}-500 text-lg mx-auto mb-1`} />
                                    <h4 className={`font-bold ${salesTypes[2].textColor} mb-1 text-xs uppercase tracking-wide`}>
                                        Mínimo
                                    </h4>
                                    <p className="text-gray-700 font-semibold text-xs">{salesTypes[2].minOrder}</p>
                                </motion.div>

                                <motion.div
                                    className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-center"
                                    variants={scaleIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <FaDollarSign className={`text-${salesTypes[2].accentColor}-500 text-lg mx-auto mb-1`} />
                                    <h4 className={`font-bold ${salesTypes[2].textColor} mb-1 text-xs uppercase tracking-wide`}>
                                        Envío
                                    </h4>
                                    <p className="text-gray-700 font-semibold text-xs">{salesTypes[2].deliveryCost}</p>
                                </motion.div>
                            </div>

                            {/* Características principales compactas */}
                            <div className="mb-4">
                                <h4 className={`text-lg font-bold ${salesTypes[2].textColor} mb-3`}>
                                    Características Principales
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {salesTypes[2].features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            className={`flex items-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border ${feature.highlight ? `border-${salesTypes[2].accentColor}-200 bg-gradient-to-r ${salesTypes[2].lightColor}` : 'border-white/50'} group hover:shadow-md transition-all duration-300`}
                                            initial={{ opacity: 0, x: -5 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (featureIndex * 0.03) }}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            <span className={`text-${salesTypes[2].accentColor}-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform`} aria-hidden="true">
                                                {feature.icon}
                                            </span>
                                            <span className="text-gray-800 font-medium text-xs leading-snug">
                                                {feature.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Beneficios finales compactos */}
                            <motion.div
                                className={`bg-gradient-to-r ${salesTypes[2].lightColor} p-4 rounded-xl shadow-sm border-l-4 border-${salesTypes[2].accentColor}-400 relative overflow-hidden`}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                            >
                                {/* Elemento decorativo */}
                                <div className="absolute top-2 right-2 text-2xl opacity-20">
                                    💡
                                </div>

                                <h4 className={`text-base font-bold ${salesTypes[2].textColor} mb-2 flex items-center gap-2`}>
                                    <span className="text-lg">🎯</span>
                                    ¿Para quién es ideal?
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm font-medium">
                                    {salesTypes[2].benefits}
                                </p>
                            </motion.div>
                        </div>
                    </motion.article>
                </div>

                {/* Call to action final */}
                <motion.div
                    className="text-center mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 max-w-3xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                            ¿Listo para hacer tu pedido? 🥚
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg mb-4">
                            Elige la modalidad que mejor se adapte a tu negocio y comienza a disfrutar de huevos frescos y de calidad.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                                <FaCheckCircle />
                                <span>Huevos frescos garantizados</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-700 font-medium text-sm">
                                <FaCheckCircle />
                                <span>Atención personalizada</span>
                            </div>
                            <div className="flex items-center gap-2 text-orange-700 font-medium text-sm">
                                <FaCheckCircle />
                                <span>Precios competitivos</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default How;