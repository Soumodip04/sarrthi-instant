import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.loca.lt",
    "loca.lt",
    "neat-knives-lick.loca.lt",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
};

export default nextConfig;
