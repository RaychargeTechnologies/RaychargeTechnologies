import type { NextConfig } from "next";
// configure for github pages deployment

const isProd = process.env.NODE_EXPRESS_ENV === 'production' || true; // Or use process.env.NODE_ENV

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  
};

export default nextConfig;