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
  config.keys = appInfo.name + '_1594882727180_3347';

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mongoose = {
    url: 'mongodb://10.10.0.138/example',
    options: { useUnifiedTopology: true },
  };

  config.graphql = {
    router: '/graphql',
    graphiql: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // add your middleware config here
  config.middleware = [ 'graphql' ];

  return {
    ...config,
    ...userConfig,
  };
};
