/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ This replaces images.domains and fixes your crash
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async headers() {
    const headers = []

    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      })
    }

    return headers
  },
}

module.exports = nextConfig
