/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yougioh-api-cards-production.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
