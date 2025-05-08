import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['https://ohk-products.g.kuroco-front.app/'],
    },
  },
};

export default nextConfig;
