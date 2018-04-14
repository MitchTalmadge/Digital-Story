const config = require('./webpack.common.config.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

config.mode = "production";

// Using AOT TypeScript compiler.
config.module.rules.unshift(
    {
        test: /\.ts$/,
        use: '@ngtools/webpack',
        exclude: [/\.(spec|e2e)\.ts$/]
    }
);

config.plugins.push(
    // AOT Angular Plugin
    new AngularCompilerPlugin({
        tsConfigPath: path.join(__dirname, '../tsconfig.json'),
        entryModule: path.join(__dirname, '../src/web/app.module#AppModule')
    }),
    // HTML Webpack Plugin with dev not present (aka false)
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/web/static/index.html.ejs'),
        favicon: path.join(__dirname, '../src/web/static/images/favicon.ico'),
        filename: path.join(config.output.path, 'index.html'),
        inject: 'body',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        },
        chunksSortMode: 'dependency'
    })
);

module.exports = config;