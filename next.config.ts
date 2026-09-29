import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/mentions_legales", destination: "/mentions-legales", permanent: true },
      { source: "/politique-de-confidentialite", destination: "/confidentialite", permanent: true },
      { source: "/politique-cookies", destination: "/cookies", permanent: true },
      { source: "/conditions-generales-de-vente", destination: "/cgv", permanent: true },
    ];
  },
};

export default nextConfig;
