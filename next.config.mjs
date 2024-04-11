// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https', // Assuming images are served over HTTPS
            hostname: 'cdn.sanity.io',
            // You can also specify a pathname if you want to restrict to specific paths
            // pathname: '/images/*',
        }
    ],
  },
};

export default nextConfig;