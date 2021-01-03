const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx'],
  },
};
