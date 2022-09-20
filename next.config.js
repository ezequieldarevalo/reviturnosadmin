/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL
  }
}

module.exports = nextConfig
