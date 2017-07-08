const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './main.js',
    },

    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        publicPath: '/dist',
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    },

                }],

            },

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),

    },
};
