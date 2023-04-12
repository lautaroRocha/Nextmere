/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns: [
      {hostname: "images.cdn3.buscalibre.com"},
      {hostname: "images.cdn1.buscalibre.com"},
      {hostname: "pagesandcoffeecups.files.wordpress.com"},
      {hostname: "m.media-amazon.com"},
      {hostname: "http2.mlstatic.com"},
      {hostname: "pictures.abebooks.com"},
      {hostname: "upload.wikimedia.org"},
      {hostname: "i0.wp.com"},
      {hostname: "d1w7fb2mkkr3kw.cloudfront.net"},
      {hostname: "b1512865.smushcdn.com"},
      {hostname: "images-na.ssl-images-amazon.com"}
    ]
  }
}

module.exports = nextConfig
