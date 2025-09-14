const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/ScreenStudio', 
  assetPrefix: '/ScreenStudio/',  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   trailingSlash: true,
};

export default nextConfig;