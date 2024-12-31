/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://saqtamaq.kz/api/v1/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
