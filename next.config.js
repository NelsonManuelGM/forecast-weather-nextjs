const isProd = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isProd ? '/forecast-weather-nextjs/' : '',
}

module.exports = nextConfig
