// src/app/contacto/page.jsx
import React from 'react'

import Introduction from './Components/Introduction';

import Data from "../constants.json";




export const metadata = {
    title: "Contacta a Distribuidora Huevos La Rural | El Salvador",
    description: "Contacta a Distribuidora Huevos La Rural para cualquier consulta sobre nuestros huevos frescos. Estamos aquí para ayudarte con tus pedidos o preguntas.",
    keywords: [
        "contacto",
        "información de contacto",
        "teléfono",
        "correo electrónico",
        "dirección",
        "huevos frescos",
        "venta de huevos",
        "distribuidora de huevos",
        "huevos por mayoreo",
        "huevos en El Salvador",
        "huevos de granja",
        "precios de huevos",
        "comprar huevos",
        "servicio de entrega de huevos"
    ],
    authors: [{ name: "Distribuidora Huevos La Rural", url: `${Data.main_domain}/` }],
    creator: "Distribuidora Huevos La Rural",
    publisher: "Distribuidora Huevos La Rural",
    openGraph: {
        title: "Contacta a Distribuidora Huevos La Rural - Huevos Frescos en El Salvador",
        description: "Contacta a Distribuidora Huevos La Rural para cualquier consulta sobre nuestros huevos frescos. Estamos aquí para ayudarte con tus pedidos o preguntas.",
        url: `${Data.main_domain}/contacto`,
        siteName: "Distribuidora Huevos La Rural",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Distribuidora Huevos La Rural - Huevos Frescos en El Salvador"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacta a Distribuidora Huevos La Rural - Huevos Frescos en El Salvador",
        description: "Contacta a Distribuidora Huevos La Rural para cualquier consulta sobre nuestros huevos frescos. Estamos aquí para ayudarte con tus pedidos o preguntas.",
        image: Data.logos.favicon,
        creator: "@distribuidoraHuevosLaRural",
        site: "@distribuidoraHuevosLaRural"
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1
        }
    },
    icons: {
        icon: Data.logos.favicon,
        shortcut: Data.logos.favicon,
        apple: Data.logos.favicon,
        other: {
            rel: "apple-touch-icon-precomposed",
            url: Data.logos.favicon
        }
    },
    verification: {
        google: Data.SEO.google_search_console_id,
    },
    alternates: {
        canonical: `${Data.main_domain}/contacto`,
        languages: {
            "es-SV": `${Data.main_domain}/contacto`,
            "es": `${Data.main_domain}/contacto`
        },
    },
    category: "Alimentación y Bebidas",
    classification: "Distribución de Alimentos",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    applicationName: "Distribuidora Huevos La Rural",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Contacta a Distribuidora Huevos La Rural - Huevos Frescos en El Salvador"
    },
    manifest: "/manifest.json",
    themeColor: Data.colorMarca,
    colorScheme: "dark light",
    referrer: "origin-when-cross-origin",
    generator: "Next.js",
    appLinks: {
        android: {
            package: Data.android_package,
            app_name: Data.android_appname
        },
        web: {
            url: `${Data.main_domain}/contacto`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/`),
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false
    },
    geo: {
        region: "SV",
        placename: "El Salvador",
    }
};

function page() {
    return (
        <React.Fragment>
            <Introduction />
        </React.Fragment>
    )
}

export default page