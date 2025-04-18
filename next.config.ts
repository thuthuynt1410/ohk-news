import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['https://ohk-product.g.kuroco.app'],
    },
  },
};

export default nextConfig;
