/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, // Elimina el header 'X-Powered-By' para mejorar la seguridad.
  images: {
    domains: ['yotfil.com, yotfil.dev'], // Configura los dominios permitidos para cargar imágenes optimizadas.
  },
}

export default nextConfig
