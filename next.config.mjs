/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },     // don’t fail builds on ESLint
  typescript: { ignoreBuildErrors: true },  // don’t fail builds on TS type errors
};

export default nextConfig;