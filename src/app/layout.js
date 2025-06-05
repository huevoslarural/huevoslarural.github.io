// src/app/layout.js
import React from "react";

import "./globals.css";

import Navegation from "./Navegation";
import Footer from "./Footer";

import Data from "./constants.json";





export const metadata = {
  title: "Distribuidora Huevos La Rural | Huevos Frescos en El Salvador",
  description: "Compra huevos frescos de calidad en El Salvador. Envíos por mayoreo y menudeo. Precios accesibles y servicio confiable. ¡Ordene ahora!",
  keywords: ["huevos frescos", "venta de huevos", "distribuidora de huevos", "huevos por mayoreo", "huevos en El Salvador", "huevos de granja", "precios de huevos", "comprar huevos", "servicio de entrega de huevos"],
  authors: [{ name: "Distribuidora Huevos La Rural", url: `${Data.main_domain}/` }],
  creator: "Distribuidora Huevos La Rural",
  publisher: "Distribuidora Huevos La Rural",
  openGraph: {
    title: "Distribuidora Huevos La Rural - Huevos Frescos y de Calidad en El Salvador",
    description: "Descubre la frescura y calidad de nuestros huevos. Perfectos para tu hogar o negocio. ¡Haz tu pedido hoy y disfruta de la diferencia!",
    url: `${Data.main_domain}/`,
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
    title: "Distribuidora Huevos La Rural - Huevos Frescos en El Salvador",
    description: "Compra huevos frescos de calidad en El Salvador. Envíos por mayoreo y menudeo. Precios accesibles y servicio confiable. ¡Ordene ahora!",
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
    canonical: `${Data.main_domain}/`,
    languages: {
      "es-SV": `${Data.main_domain}/`,
      "es": `${Data.main_domain}/`
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
    title: "Distribuidora Huevos La Rural - Huevos Frescos en El Salvador"
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
      url: `${Data.main_domain}/`,
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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navegation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
