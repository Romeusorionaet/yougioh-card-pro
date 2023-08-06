/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://yougioh-api-cards.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
