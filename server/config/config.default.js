/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_bookshelf_secret';

  // add your middleware config here
  config.middleware = [
    'jwtauth',
  ];

  config.jwtauth = {
    match(ctx) {
      const url = ctx.request.url;
      return !(url.startsWith('/api/login') || url.startsWith('/api/register'));
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017',
      options: {
        dbName: 'bookshelf',
      },
    },
  };

  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
      },
    },
    domainWhiteList: [
      'http://localhost:3000',
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
