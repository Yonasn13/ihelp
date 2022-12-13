// in next.config.js
const withPWA = require('next-pwa')({
  dest: 'public'
 })
 
 const nextConfig = withPWA({
  // all other next config...
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  }
 })
 
<<<<<<< HEAD
 module.exports = nextConfig
=======
 module.exports = nextConfig
>>>>>>> d924aabe0366a54fe83bba5f74520f1363bf9558
