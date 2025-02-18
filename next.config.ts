import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        protocol: "https",
      },
      {
        hostname: "medchronai-files.s3.us-west-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
