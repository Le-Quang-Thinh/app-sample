/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: '/'
  },

  experimental: {
    // optimizeCss: true,
    // appDir: true,
  },
}

module.exports = nextConfig
