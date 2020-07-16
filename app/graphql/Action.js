'use strict';

// const SysError = require('../common/sys_error');

module.exports = (graphqlTC, schemaComposer) => {
  const ActionTC = graphqlTC.ActionTC;
  ActionTC.setDescription('可执行操作列表');


  schemaComposer.Query.addFields({
    ActionById: ActionTC.getResolver('findById'),
    ActionByIds: ActionTC.getResolver('findByIds'),
    ActionOne: ActionTC.getResolver('findOne'),
    ActionMany: ActionTC.getResolver('findMany'),
  });


  schemaComposer.Mutation.addFields({
    ActionRemoveOne: ActionTC.getResolver('removeOne'),
  });

};
