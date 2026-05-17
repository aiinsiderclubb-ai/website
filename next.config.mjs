/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compress responses (gzip/brotli)
  compress: true,
  images: {
    // Modern formats for smaller payloads
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/', destination: '/uk', permanent: true },
      { source: '/about', destination: '/uk/about', permanent: true },
      { source: '/cases', destination: '/uk/cases', permanent: true },
      { source: '/cases/:slug*', destination: '/uk/cases/:slug*', permanent: true },
      { source: '/projects', destination: '/uk/projects', permanent: true },
      { source: '/projects/:slug*', destination: '/uk/projects/:slug*', permanent: true },
    ];
  },
  // HTTP headers for performance + security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/icon.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
