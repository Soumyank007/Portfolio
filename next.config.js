/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: ""
        }
      ],
      formats: ['image/avif', 'image/webp'],
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optimize for modern browsers
    experimental: {
      optimizePackageImports: ['framer-motion', '@reduxjs/toolkit', 'react-syntax-highlighter'],
    },
}

module.exports = nextConfig