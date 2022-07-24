/** @type {import('next').NextConfig} */
const path = require("path");

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true,
    },
  },

  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
};

module.exports = withVanillaExtract(nextConfig);
