import type { NextConfig } from "next";

/**
 * GitHub Pages support:
 * - Set NEXT_PUBLIC_BASE_PATH to "/repo-name" when deploying under a project site.
 * - Leave empty for user/org pages (username.github.io) or custom domains at root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
