const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
   /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  // output: "export",

   // reactStrictMode: true,

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  // basePath: "/recipe-app",

   basePath: isProd ? '/recipe-app' : '',
   assetPrefix: isProd ? '/recipe-app/' : '', 
   images: { unoptimized: true, 
            // GitHub Pages does not support Next.js image optimization 
   },
            
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
