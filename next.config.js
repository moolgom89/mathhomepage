/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mathhomepage',
  assetPrefix: '/mathhomepage/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
