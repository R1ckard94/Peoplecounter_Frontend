/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  
  nextConfig,

  async rewrites() {
      return [
        {
          source: '/api/counted/:path*',
          destination: 'https://peoplecounterapi.azurewebsites.net/api/counted/:path*',
        },
      ]
    },
};
