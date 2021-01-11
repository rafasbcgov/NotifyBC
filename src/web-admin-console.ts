import {CoreBindings} from '@loopback/core';
import express, {Request, Response} from 'express';
import {ExpressServer} from './server';
import path = require('path');
export default (server: ExpressServer) => {
  const app = server.app;
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  let extraIncludes = '';
  let viewRelDir = '../client/dist';
  app.use(require('connect-history-api-fallback')());
  if (process.env.NODE_ENV === 'dev') {
    viewRelDir = '../client';
    extraIncludes = '<script type="text/javascript" src="/app.js"></script>';
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('../client/build/webpack.dev.conf');
    const compiler = webpack(config);
    const hotMiddleware = require('webpack-hot-middleware')(compiler, {
      log: false,
      heartbeat: 2000,
    });
    app.use(hotMiddleware);
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
      }),
    );
  }
  app.set('views', path.join(__dirname, viewRelDir));
  app.use(/^\/(index\.html)?$/, (request: Request, response: Response) => {
    const appConfig = server.lbApp.getSync(CoreBindings.APPLICATION_CONFIG);
    response.render('index.html', {
      ApiUrlPrefix: appConfig.restApiRoot,
      ExtraIncludes: extraIncludes,
      ApiExplorerUrlPrefix: `${appConfig.restApiRoot}/explorer`,
    });
  });
  // Serve static files in the client folder
  app.use(express.static(path.join(__dirname, viewRelDir)));
};
