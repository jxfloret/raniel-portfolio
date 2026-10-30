import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: builds to /out, deploys on Vercel (or any static host) with zero config.
  output: "export",
  images: { unoptimized: true }, // images are pre-optimized WebP in /public/images
  trailingSlash: true,
};

export default nextConfig;
