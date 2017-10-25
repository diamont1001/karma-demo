// webpack.config.js

const path = require('path');

module.exports = {
    entry: {
        demo: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd', // 组件采用UMD格式打包
        library: 'Demo', // 组件名称
    },

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader',
                exclude: /(node_modules|libs)/
            }
        ]
    }
};