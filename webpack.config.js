const path = require('path')
// require("!style-loader!css-loader!sass-loader!./file.scss");
// var css = require("!css-loader!sass-loader!./file.scss");

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
  }
};
