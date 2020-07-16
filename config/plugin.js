'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  graphqlMongoose: {
    enable: true,
    package: 'egg-graphql-mongoose',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  eggApmAgent: {
    enable: true,
    package: 'egg-apm-agent',
    // env: [ 'prod' ], // 建议只在生产环境中启用
  },
};
