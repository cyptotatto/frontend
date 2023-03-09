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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 허용할 도메인을 입력합니다.
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-Requested-With, Access-Control-Allow-Headers, Origin, Accept, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
