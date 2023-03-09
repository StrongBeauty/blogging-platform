import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({ // loader for css, scss, sass
  test: /\.s[ac]ss$/i, // /\.s|[ac]ss$/i or /\.(sa|sc|c)ss$/ - включает и css
  use: [
            // Creates `style` nodes from JS strings
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) => resPath.includes('.module.'), // or RegExp auto: /\.module\./ - handle only modules
                  localIdentName: isDev // generating readable naming of css / scss files for dev mode
                            ? '[path][name]__[local]' // --[hash:base64:4]
                            : '[hash:base64:8]',
                },
              },
            },
            // Compiles Sass to CSS
            'sass-loader',
  ],
});
