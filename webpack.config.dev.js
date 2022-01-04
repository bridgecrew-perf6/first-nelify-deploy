const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[contenthash].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false,
          },
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
    new Dotenv(),
  ],
=======
=======
>>>>>>> upstream/main
const HtmlWebpackPplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js']
    },
    module:{
        rules:[
            {
                test:/\.m?js$/, // apply it to any file with the extension mjs or just js
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test:/\.(woff|woff2)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                        }
                }
            }   

        ]
    },
    plugins:[
        new HtmlWebpackPplugin({
        inject: true,
        template: './public/index.html',
        filename: './index.html'
        }),

        new MiniCssExtractPlugin({filename: 'assets/[name].[contenthash].css'}),

    ]
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> upstream/main
}