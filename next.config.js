/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: 'http://localhost:3002',
  },
}

module.exports = nextConfig
