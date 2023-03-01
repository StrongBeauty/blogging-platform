import { Configuration } from 'webpack-dev-server';
import { BuildOptionsType } from './types/config';

export function buildDevServer(options: BuildOptionsType): Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    // hot: true,
  };
}
