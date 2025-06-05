// src/app/ordenar/page.jsx
import React from 'react'

import How from './Components/How'
import Stock from './Components/Stock'
import StockSimple from './Components/StockSimple'

import Data from "../constants.json";





export const metadata = {
    title: "Ordenar Huevos Frescos | Precios y Métodos de Venta - Distribuidora Huevos La Rural",
    description: "Consulta los precios actualizados y métodos de venta de huevos frescos en El Salvador. Ordena ahora con Distribuidora Huevos La Rural: mayoreo, menudeo y más.",
    keywords: [
        "ordenar huevos",
        "precios de huevos",
        "métodos de venta de huevos",
        "huevos frescos",
        "comprar huevos online",
        "distribuidora de huevos",
        "huevos en El Salvador",
        "venta de huevos por mayoreo",
        "huevos por menudeo",
        "huevos de granja"
    ],
    openGraph: {
        title: "Ordenar Huevos Frescos - Precios y Métodos de Venta | Distribuidora Huevos La Rural",
        description: "Descubre los precios más recientes y opciones de venta para huevos frescos de calidad en El Salvador. ¡Haz tu pedido hoy con Distribuidora Huevos La Rural!",
        url: `${Data.main_domain}/ordenar`,
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Distribuidora Huevos La Rural - Precios y Métodos de Venta de Huevos Frescos"
            }
        ],
        type: "website",
        locale: "es_SV",
        siteName: "Distribuidora Huevos La Rural"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ordenar Huevos Frescos - Precios y Métodos | Distribuidora Huevos La Rural",
        description: "Consulta precios actualizados y métodos de venta de huevos frescos en El Salvador. ¡Ordena ahora con nosotros!",
        image: Data.logos.favicon,
        creator: "@distribuidoraHuevosLaRural",
        site: "@distribuidoraHuevosLaRural"
    },
    alternates: {
        canonical: `${Data.main_domain}/ordenar`,
        languages: {
            "es-SV": `${Data.main_domain}/ordenar`,
            "es": `${Data.main_domain}/ordenar`
        }
    }
};

function page() {
    return (
        <React.Fragment>
            <StockSimple />
            <How />
        </React.Fragment>
    )
}

export default page