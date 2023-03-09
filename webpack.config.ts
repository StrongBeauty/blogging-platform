import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvType, BuildPathsType } from './config/build/types/config';

const paths: BuildPathsType = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // application entry point
  build: path.resolve(__dirname, 'build'), // application build folder
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnvType) => { // to allow receiving env vars from package.json (webpack building)
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode, // dev, prod
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });
};
