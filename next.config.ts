import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      // Blog posts: locale-prefixed URLs serve existing blog post pages
      { source: "/:locale(en|ru|uk)/blog/:slug", destination: "/blog/:slug" },
    ];
  },
};

export default nextConfig;
