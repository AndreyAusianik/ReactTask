var path = require('path');
var webpack = require('webpack');

var STAGE = process.argv[2] || "PROD";

module.exports = {
  devtool: STAGE=="DEV"?'eval':'cheap-module-source-map',

  entry: [
    './src/index'
  ].concat(STAGE=="DEV"?[
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000']:[]),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ].concat(  STAGE=="DEV"?[
    new webpack.HotModuleReplacementPlugin()
    ]: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({minimize:true})
    ]),

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: (STAGE=="DEV"?
        ['react-hot']:
        [ ])
      .concat([ 'babel']),
      include: path.join(__dirname, 'src')
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
