import 'dotenv/config';
import path from 'node:path';
import type { Configuration } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import paths from '../support/paths';
import baseConfig from './base';

export default (): Configuration => {
  const developmentConfig: Configuration = webpackMerge(
    baseConfig('development'),
    {
      mode: 'development',
      devtool: 'eval-source-map',
      output: {
        chunkFilename: 'js/[name].js',
        filename: 'js/[name].js',
      },
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(paths.server, '/characters.json'),
              to: './',
            },
            {
              from: path.join(paths.server, '/powers.json'),
              to: './',
            },
          ],
        }) as { apply(...args: any[]): void },
        new ReactRefreshWebpackPlugin(),
      ],
    }
  );

  const devServerSettings = {
    devServer: {
      devMiddleware: {
        publicPath: '/',
      },
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: Number(process.env.PORT),
      static: paths.dist,
    },
  };

  const finalConfig: { [key: string]: any } = {
    ...developmentConfig,
    ...devServerSettings,
  };

  return finalConfig;
};
