const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  // for sourcemaps, using devtool is good enough for now
  // consider upgrading to: https://webpack.js.org/loaders/source-map-loader/
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'head',
      favicon: 'public/favicon.ico'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'public/robots.txt',
        to: 'robots.txt'
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.scss']
  }
}
