/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.infura.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
