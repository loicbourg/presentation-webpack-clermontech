var path = require('path');

var config = {
    context: path.join(__dirname, 'assets'),
    entry: [
        './main.js',
        'webpack/hot/dev-server'
    ],
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
                test: /(\.woff)|(\.eot)|(\.ttf)/,
                loader: 'url?limit=100000'
            },
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'assets'],
        extensions: ['', '.js', '.css']
    },
    output: {
        path: path.join(__dirname, 'public/compiled'),
        filename: 'main.js',
        publicPath: '/compiled'
    }
};
module.exports = config;