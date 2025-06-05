// src/app/info/page.jsx
import React from 'react'

import VendedorApp from './Components/VendedorApp'

import Data from "../constants.json";





export const metadata = {
    title: "Acerca de Distribuidora Huevos La Rural | Historia y Noticias",
    description: "Conoce más sobre Distribuidora Huevos La Rural: nuestra historia, medios interesantes, noticias y todo lo relacionado con nuestro negocio de huevos frescos en El Salvador.",
    keywords: [
        "acerca de Distribuidora Huevos La Rural",
        "historia de Distribuidora Huevos La Rural",
        "noticias de Distribuidora Huevos La Rural",
        "información del negocio",
        "huevos frescos en El Salvador",
        "distribuidora de huevos",
        "medios interesantes",
        "actualizaciones del negocio"
    ],
    authors: [{ name: "Distribuidora Huevos La Rural", url: `${Data.main_domain}/info` }],
    creator: "Distribuidora Huevos La Rural",
    publisher: "Distribuidora Huevos La Rural",
    openGraph: {
        title: "Acerca de Distribuidora Huevos La Rural - Historia y Noticias",
        description: "Descubre la historia, medios interesantes y noticias de Distribuidora Huevos La Rural, tu fuente confiable de huevos frescos en El Salvador.",
        url: `${Data.main_domain}/info`,
        siteName: "Distribuidora Huevos La Rural",
        images: [
            {
                url: Data.logos.favicon,
                width: 1200,
                height: 630,
                alt: "Distribuidora Huevos La Rural - Historia y Noticias"
            }
        ],
        type: "website",
        locale: "es_SV",
        countryName: "El Salvador"
    },
    twitter: {
        card: "summary_large_image",
        title: "Acerca de Distribuidora Huevos La Rural - Historia y Noticias",
        description: "Conoce más sobre Distribuidora Huevos La Rural: nuestra historia, medios interesantes, noticias y todo lo relacionado con nuestro negocio de huevos frescos en El Salvador.",
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
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
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
        google: Data.SEO.google_search_console_id
    },
    alternates: {
        canonical: `${Data.main_domain}/info`,
        languages: {
            "es-SV": `${Data.main_domain}/info`,
            "es": `${Data.main_domain}/info`
        }
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
        title: "Acerca de Distribuidora Huevos La Rural - Historia y Noticias"
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
            url: `${Data.main_domain}/info`,
            should_fallback: true
        }
    },
    metadataBase: new URL(`${Data.main_domain}/info`),
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false
    },
    geo: {
        region: "SV",
        placename: "El Salvador"
    }
};

function page() {
    return (
        <React.Fragment>
            <VendedorApp />
        </React.Fragment>
    )
}

export default page