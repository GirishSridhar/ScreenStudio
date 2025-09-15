/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'ScreenStudio'; // Your repo name

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true, // required for static export
    domains: ['girishsridhar.github.io'], // Allow external image URLs
  },
};

module.exports = nextConfig;
