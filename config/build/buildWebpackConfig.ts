import webpack from 'webpack';
import { BuildOptionsType } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptionsType): webpack.Configuration {
  const {
    mode, paths, isDev, apiUrl, project,
  } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options), // handlers for not js files
    },
    resolve: buildResolves(options),
    output: { // cashing bundle
      filename: '[name].[contenthash].js', // creating uniq names
      path: paths.build,
      clean: true, // removing cash
    },
    plugins: buildPlugins(paths.html, isDev, apiUrl, project),
    devtool: isDev ? 'inline-source-map' : undefined, // source map for dev mode
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
