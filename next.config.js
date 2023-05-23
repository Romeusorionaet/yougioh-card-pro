/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'yougioh-api-cards.onrender.com',
              port: '',
              pathname: '/**',
            },
        ],
    },
  };
  
  module.exports = nextConfig