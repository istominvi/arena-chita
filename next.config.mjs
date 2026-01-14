/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Custom domain: arena-chita.ru (served from root)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
