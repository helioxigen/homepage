var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [ path.resolve(__dirname, 'src') ],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'react'],
            cacheDirectory: true
          },
      },
      {
        test: /\.css?/,
        include: [ path.resolve(__dirname, 'src') ],
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ]
                })
              ],
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  }
}
