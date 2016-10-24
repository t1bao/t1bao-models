/**
 * UserExtra.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    merchant: {
      model: 'merchant',
      required: true,
      unique: true
    },
    qq: {
      type: 'string'
    },
    weixin: {
      type: 'string'
    },
    weibo: {
      type: 'string'
    },
    phone: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};
