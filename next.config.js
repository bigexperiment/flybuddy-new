/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['randomuser.me', 'cdn.iconscout.com'],
  },
  transpilePackages: ['react-icons'],
};

module.exports = nextConfig; 