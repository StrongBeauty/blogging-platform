import { ResolveOptions } from 'webpack';
import { BuildOptionsType } from './types/config';

export function buildResolves(options: BuildOptionsType): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
