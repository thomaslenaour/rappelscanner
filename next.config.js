/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sa.thomaslenaour.com',
      },
    ],
  },
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sa.thomaslenaour.com;
      connect-src 'self' https://sa.thomaslenaour.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' https://sa.thomaslenaour.com https://simpleanalyticsbadges.com;
      font-src 'self' data:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `;

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value: 'microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
