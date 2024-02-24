const path = require('path');

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  skipTrailingSlashRedirect: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: ['@repo/ui'],
  compiler: {
    emotion: true,
    styledComponents: true,
    removeConsole: {
      exclude:
        process.env.NODE_ENV === 'production'
          ? ['error', 'info', 'warn']
          : ['log', 'error', 'info', 'warn', 'table'],
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
      {
        test: /\.node/,
        use: 'raw-loader',
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)', // 모든 경로에 대해 적용
        headers: [
          {
            key: 'Timing-Allow-Origin',
            value: '*', // 모든 도메인에 대해 허용하려면 '*' 사용
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
