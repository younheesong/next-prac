/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "https://naver.com",
        permanent: false,
      },
      {
        source: "/old-blog/:path",
        destination: "https://naver.com",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
