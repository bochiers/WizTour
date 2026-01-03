import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optional: you can leave pathname as '/**' to allow all Unsplash images
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;