import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    esbuild: {
      legalComments: 'eof',
    },
    build: {
      manifest: true,
      sourcemap: true,
    },
    css: {
      devSourcemap: true,
      postcss: './.postcssrc.json',
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          dimensions: false,
        },
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            googleSiteVerificationToken: env.GOOGLE_SITE_VERIFICATION_TOKEN,
          },
        },
      }),
      viteImagemin({
        disable: command !== 'build',
        optipng: {
          optimizationLevel: 5,
        },
        mozjpeg: {
          quality: 75,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeDimensions',
              active: true,
            },
          ],
        },
      }),
      ...(env.VITE_STATS
        ? [
            visualizer({
              filename: 'build-stats.html',
              gzipSize: true,
              open: true,
              template: 'treemap',
            }),
          ]
        : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      host: '0.0.0.0',
      ...(env.PORT && { port: Number(env.PORT) }),
      strictPort: true,
    },
  };
});
