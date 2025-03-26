/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['randomuser.me', 'cdn.iconscout.com'],
    unoptimized: true
  },
  transpilePackages: ['react-icons'],
  output: 'standalone'
};

module.exports = nextConfig; 

// next.config.js