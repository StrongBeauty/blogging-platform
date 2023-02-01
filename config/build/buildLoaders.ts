import webpack from "webpack";

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export function buildLoaders(): webpack.RuleSetRule[] {
    return [
        typescriptLoader,
    ]
}