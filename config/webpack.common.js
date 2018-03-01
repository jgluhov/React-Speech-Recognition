const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app',

    resolve: {
        extensions: ['.tsx', '.js'],
        alias: {
            '@components': helpers.root('src', 'components'),
            '@containers': helpers.root('src', 'containers')
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader', 
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: 'sass-loader'
                    }],                    
                    fallback: 'style-loader'
                })
            },
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
        }),
        new ExtractTextPlugin('css/bundle.css')
    ]
}
