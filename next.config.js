/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.abc.net.au",
      "www.ccn.com",
      "afr.com",
      "m.files.bbci.co.uk",
      "ichef.bbci.co.uk",
      "www.bbc.co.uk",
      "static.ffx.io",
      "storage.googleapis.com",
      "media.cnn.com",
      "s.abcnews.com",
    ],
  },
};

module.exports = nextConfig;


