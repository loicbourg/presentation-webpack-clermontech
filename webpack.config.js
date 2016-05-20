var path = require('path');

var config = {
    context: path.join(__dirname, 'assets'),
    entry: {
        main: './main.js',
        'dev-server': 'webpack/hot/dev-server'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.html/,
                loaders: ["html-loader"]
            },
            {
                test: /(\.woff)|(\.eot)|(\.ttf)|(\.png)|(\.jpg)/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.gif/,
                loader: 'file'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'assets'],
        extensions: ['', '.js', '.css']
    },
    output: {
        path: path.join(__dirname, 'public/compiled'),
        filename: '[name].js',
        publicPath: '/compiled/'
    }
};
module.exports = config;
