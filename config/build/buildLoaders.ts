import webpack from 'webpack';
import { BuildOptionsType } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptionsType): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i, // + шрифты
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const cssLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
}
