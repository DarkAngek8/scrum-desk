/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fra.cloud.appwrite.io', // Хост з твоєї помилки
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io', // Про всяк випадок додамо і дефолтний, якщо хости мінятимуться
      },
    ],
  },
};

export default nextConfig;
