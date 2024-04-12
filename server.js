import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

const compiler = Webpack(webpackConfig);
const devServerOptions = {
  port: 7070,
  open: true,
  historyApiFallback: true,
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  // eslint-disable-next-line no-console
  console.log('Starting server...');
  await server.start();
};

runServer();
