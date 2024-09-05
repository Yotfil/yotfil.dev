/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React para detectar problemas potenciales.
  poweredByHeader: false, // Elimina el header 'X-Powered-By' para mejorar la seguridad.
  swcMinify: true, // Habilita la minificación con SWC para reducir el tamaño de los archivos.
  compress: true, // Activa la compresión de Gzip para mejorar los tiempos de carga.
  images: {
    domains: ['yotfil.com, yotfil.dev'], // Configura los dominios permitidos para cargar imágenes optimizadas.
  },
  experimental: {
    optimizeCss: true, // Habilita la minificación de CSS.
    scrollRestoration: true, // Mantiene la posición de desplazamiento al volver a una página.
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Evita importar ciertos módulos en el lado del cliente si solo son necesarios en el servidor.
      config.resolve.fallback = {
        fs: false,
        module: false,
      }
    }
    return config
  },
}

export default nextConfig
