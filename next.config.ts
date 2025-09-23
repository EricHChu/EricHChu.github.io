import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  async redirects(){
    return[
      {
        source: '/resume',
        destination: '/Eric_Chu_June_2025_Resume.pdf',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
