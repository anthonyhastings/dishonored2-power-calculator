import 'dotenv/config';
import type { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import baseConfig from './base';

interface EnvOptions {
  stats?: boolean;
}

export default (env: EnvOptions = {}): Configuration => {
  const productionConfig = webpackMerge(baseConfig('production'), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      chunkFilename: 'js/[name].[contenthash].js',
      filename: 'js/[name].[contenthash].js',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              passes: 2,
            },
          },
        }),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['mozjpeg', { quality: 75 }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      { name: 'removeViewBox', active: false },
                      { name: 'removeDimensions', active: true },
                    ],
                  },
                ],
              ],
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      runtimeChunk: {
        name: 'manifest',
      },
    },
  });

  if (env.stats === true) {
    productionConfig.plugins?.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
      }) as { apply(...args: any[]): void }
    );
  }

  return productionConfig;
};
