import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["three"],
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon.svg",
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
