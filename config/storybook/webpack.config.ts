import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPathsType } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPathsType = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'), // path to src folder for absolute path
  };
  config!.resolve!.modules!.unshift(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config!.module!.rules.push(buildSvgLoader()); // connecting svg
  config!.module!.rules.push(buildCssLoader(true)); // connecting css

  config!.plugins!.push(new DefinePlugin({ // loading global vars in storybook
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }));

  return config;
};
