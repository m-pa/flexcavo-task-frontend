const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/public', to: '' }]
    })
  ]
}
