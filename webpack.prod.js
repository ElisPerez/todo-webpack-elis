const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Para minimizar el css. Nota: El Terser viene en el webpack pero al hacerlo manualmente hay que hacer la configuración.
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    clean: true,
    filename: 'main.[contenthash].js',
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
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizer(), new Terser()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Titulo de la pagina desde HtmlWebpackPlugin',
      // filename: 'myCustomName.html', // Default: 'index.html'
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      // filename: "[name].css", // Default: main.css
      // filename: 'style.css', // Custom filename.
      filename: '[name].[fullhash].css', // main.77b98e9f4ffb9cf2bd92.css
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets/' }],
    }),
  ],
};
