/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["ipfs.infura.io", "cryptotattoo.s3.ap-northeast-2.amazonaws.com"],
  // },
  // reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api",
  //       destination:
  //         "http://ec2-3-39-28-20.ap-northeast-2.compute.amazonaws.com:80", // 프록시될 경로와 포트를 명시
  //     },
  //   ];
  // },

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

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*", // 허용할 도메인을 입력합니다.
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-Requested-With, Access-Control-Allow-Headers, Origin, Accept, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
