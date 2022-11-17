const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /style.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Titulo de la pagina desde HtmlWebpackPlugin',
      // filename: 'myCustomName.html', // Default: 'index.html'
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      // filename: "[name].css", // Default: main.css
      // filename: "[name].[fullhash].css", // main.77b98e9f4ffb9cf2bd92.css
      filename: 'style.css', // Custom filename.
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets/' }],
    }),
  ],
};
