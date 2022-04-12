/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  images: {
   domains: ['images.microcms-assets.io'],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // }
}

module.exports = nextConfig
