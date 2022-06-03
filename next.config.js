/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true,
    },
  },
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
};

module.exports = nextConfig;
