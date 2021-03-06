const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');


module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('docs'),
        filename: 'js/bundle.js',
    },

    plugins: [
        new ExtractTextPlugin('css/bundle.css')
    ],

    devServer: {
        contentBase: helpers.root('docs'),
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal',
    }
});
