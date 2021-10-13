const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/javascript/index.js',

    mode: 'development',

    devServer: 'open',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
        }),
    ],

}