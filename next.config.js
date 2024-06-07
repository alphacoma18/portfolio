const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');

const nextDataIndex = runtimeCaching.findIndex(
  (entry) => entry.options.cacheName === 'next-data'
);
if (nextDataIndex !== -1) {
  runtimeCaching[nextDataIndex].handler = 'NetworkFirst';
} else {
  throw new Error('Failed to find next-data object in runtime caching');
}


const pwaConfig = {
  dest: "public",
  cacheOnFrontEndNav: process.env.NODE_ENV === 'production',
  dynamicStartUrlRedirect: '/',
  fallbacks: {
    image: '/android-chrome-512x512.png',
    document: '',
    font: '',
    audio: '',
    video: ''
  },
  cacheStartUrl: true,
  skipWaiting: true,
  scope: '/',
  cacheId: 'alpha',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  navigateFallback: '/offline',
  navigationPreload: true,
  runtimeCaching,
  maximumFileSizeToCacheInBytes: 5_000_000,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
};


// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    optimizeCss: true,
    optimizeServerReact: true,
    appDocumentPreloading: true,
    workerThreads: true,
    // ppr: true,
    memoryBasedWorkersCount: true,
    // typedRoutes: true,
    optimisticClientCache: true,
    optimizePackageImports: ["react-icons", "next-auth", "prisma", "framer-motion", "tsparticles", "zod"],
    // useWasmBinary: true,
    // useLightningcss: true,
    middlewarePrefetch: "strict",
    instrumentationHook: true,
    // staticWorkerRequestDeduping: true,
    // forceSwcTransforms: true,
    // fullySpecified: true,
    // bundlePagesExternals: true,
    scrollRestoration: true,
    serverMinification: true,
    clientRouterFilter: true,
    // craCompat: true,
    webpackBuildWorker: true,
    isrFlushToDisk: true,
    strictNextHead: true,
    nextScriptWorkers: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};


module.exports = withPlugins(
  [
    [withPWA, pwaConfig],
    [withBundleAnalyzer],
  ],
  nextConfig
);