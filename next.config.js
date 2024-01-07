const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = withNextra(nextConfig);
