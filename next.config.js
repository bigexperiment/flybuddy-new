/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['randomuser.me', 'cdn.iconscout.com'],
  },
  transpilePackages: ['react-icons'],
};

module.exports = nextConfig; 