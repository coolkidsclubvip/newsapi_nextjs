/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "www.abc.net.au",
//       "www.ccn.com",
//       "afr.com",
//       "m.files.bbci.co.uk",
//       "ichef.bbci.co.uk",
//       "www.bbc.co.uk",
//       "static.ffx.io",
//       "storage.googleapis.com",
//       "media.cnn.com",
//       "s.abcnews.com",
//       "live-production.wcms.abc-cdn.net.au",
//       "cdn.weatherapi.com",
//       "static.files.bbci.co.uk",
//     ],
//   },
// };

// module.exports = nextConfig;

//below copied from Alex
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const reactStrictMode = true;

  // UNCONFIGURED HOST + REMOTE PATTERNS
  const images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.abc-cdn.net.au",
      },
      {
        protocol: "https",
        hostname: "www.abc.net.au",
      },
      {
        protocol: "https",
        hostname: "www.ccn.com",
      },
      {
        protocol: "https",
        hostname: "m.files.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.bbc.co.uk",
      },
      {
        protocol: "https",
        hostname: "static.ffx.io",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "media.cnn.com",
      },
      {
        protocol: "https",
        hostname: "s.abcnews.com",
      },
      {
        protocol: "https",
        hostname: "live-production.wcms.abc-cdn.net.au",
      },
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: "https",
        hostname: "static.files.bbci.co.uk",
      },
    ],
  };

  const env = {
    SERVER_NAME: (() => {
      if (isDev) return "http://localhost:3000/";
      if (isProd) return "newsapi-nextjs-80vfc4ubf-coolkidsclubvip.vercel.app";
    })(),
    NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  };

  // Next.config returns an object
  return {
    reactStrictMode,
    images,
    env,
  };
};
