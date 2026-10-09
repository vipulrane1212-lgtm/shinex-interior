import type { NextConfig } from 'next';

const isStaticExport = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? 'export' : undefined,
  basePath: isStaticExport ? '/shinex-interior' : undefined,
  assetPrefix: isStaticExport ? '/shinex-interior' : undefined,
  trailingSlash: isStaticExport ? true : undefined,
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
