const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/javascript/index.js',

    mode: 'development',

    devServer: {
        open: true,
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
                type: 'asset/resource',
            }
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
        }),
        new Dotenv(),
    ],

}