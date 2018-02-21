const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
console.log(helpers.root('src'));

module.exports = {
    entry: './src/app',

    resolve: {
        extensions: ['.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['docs'], {
            root: helpers.root(),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
            },
        })
    ]
}
