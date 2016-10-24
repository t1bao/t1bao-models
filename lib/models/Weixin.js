/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,
  attributes: {
    openid: {
      type: 'string',
      required: true,
      unique: true,
      primaryKey: true
    },
    unionid: {
      type: 'string'
    },
    nickname: {
      type: 'string'
    },
    sex: {
      type: 'string'
    },
    province: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    headimgurl: {
      type: 'string'
    },
    privilege: {
      type: 'text'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'create_time',
      defaultsTo: Date.now
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'update_time',
      defaultsTo: Date.now
    }
  }
};
