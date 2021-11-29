const path = require('path');
var webpack = require('webpack');

module.exports= {
    mode: 'development',
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module : {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

