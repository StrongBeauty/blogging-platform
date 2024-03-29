import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWepbackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins(
  path: string,
  isDev: boolean,
  apiUrl: string,
  project: string,
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(), // showing progress of loading
    new HtmlWebpackPlugin({ // creating of HTML files to serve webpack bundle
      template: path, // using like template
    }),
    new MiniCssExtractPlugin({ // building css separately
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({ // using global vars in the app
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

  ];

  if (isDev) {
    plugins.push(new ReactRefreshWepbackPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({ // counting bundle and chanks
        openAnalyzer: false,
      }),
    );

    // plugins.push(new webpack.HotModuleReplacementPlugin()),
  }

  return plugins;
}
