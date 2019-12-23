const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Clean app'})
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {                   
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ]
          }
     ]
    }
}