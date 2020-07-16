'use strict';

module.exports = app => {
  const Types = app.mongoose.Schema.Types;
  const ActionSchema = new app.mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      description: 'Action 名称',
    },
    identifier: {
      type: String,
      index: true,
      description: '指令 服务标识',
    },
    callType: {
      type: Number,
      description: '事件操作类型:1 - 同步  2- 异步 3-事件  4-属性',
    },
    type: {
      type: Number,
      description: '分组 1 - 默认  2- 自定义',
    },
    script: {
      type: String,
      description: '脚本内容 需要base64转义',
    },
    description: {
      type: String,
      description: '动作描述',
    },
    userId: {
      type: Types.ObjectId,
      description: '动作创建的负责人',
    },
  }, {
    timestamps: true,
  });

  return app.mongoose.model('Action', ActionSchema);
};
