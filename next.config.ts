/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mathhomepage',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/mathhomepage',
};

export default nextConfig;
