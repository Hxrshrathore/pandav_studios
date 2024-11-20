/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
