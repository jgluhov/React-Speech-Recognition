const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(__dirname, '..', 'docs'),
        filename: 'js/bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, '..', 'docs'),
        port: 3000,
        historyApiFallback: true,
        stats: 'minimal',
    }
});
