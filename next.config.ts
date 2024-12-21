import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/photos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sellers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/settings',
        destination: '/edit-profile',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
