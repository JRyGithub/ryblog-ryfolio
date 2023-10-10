// import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.robohash.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/JRyGithub/ryblog-mdx-blogs/main/images/**'
      }
    ]
  }
};

module.exports = nextConfig;

// const withMDX = createMDX({
//   options: {
//     extension: /\.mdx?$/,
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
//   },
// });

// export default withMDX(nextConfig);