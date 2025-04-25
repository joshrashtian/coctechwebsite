import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", //temp: for gallery image test
        pathname: "/seed/**"
      }
    ]
  }
};

export default nextConfig;
