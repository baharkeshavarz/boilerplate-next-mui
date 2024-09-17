/** @type {import('next').NextConfig} */
const nextIntlPlugin = require("next-intl/plugin");
const withNextIntl = nextIntlPlugin("./src/i18n.ts");
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
    domains: ["cdnap.omanai.info"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://landing.motomatch.net/service/api/:path*",
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
