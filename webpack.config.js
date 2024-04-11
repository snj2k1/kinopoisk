import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const webpackConfig = {
  mode: 'development',
  entry: './src/app/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({ template: './public/index.html', filename: 'index.html' }),
    new NodePolyfillPlugin(),
    new Dotenv({
      path: `./.env`,
      systemvars: true,
    }),
  ],
};

export default webpackConfig;
