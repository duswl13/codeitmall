/** @type {import('next').NextConfig} */
// next 서버 설정을 하는 파일
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id", // 대상 url
        destination: "/items/:id", // 리다이렉트 시킬 url
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/codeitmall/**",
      },
    ],
  },
};

module.exports = nextConfig;
