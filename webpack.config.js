const path = require('path');
module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve('','./build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve('', './build'),
        inline: true
    }
}