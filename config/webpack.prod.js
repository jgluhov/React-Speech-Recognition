const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const helpers = require('./helpers');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('docs'),
        filename: 'js/bundle.[hash].js',
    },

    plugins: [
        new ExtractTextPlugin('css/bundle.[hash].css'),
        new UglifyJsPlugin()
    ]
});
