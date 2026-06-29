import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, 
  }

  // images: {
  //   // This tells Next.js to act as a normal HTML <img> tag under the hood
  //   // and skip downloading/optimizing the images on your local machine
  //   unoptimized: true, 
  // }
};

export default nextConfig;
