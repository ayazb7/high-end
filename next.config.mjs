// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true, // This makes it a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
