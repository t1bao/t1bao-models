/**
 * OAuthWeixin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true
    },
    type: {
      type: 'string',
      enum: ['weixin', 'qq', 'weibo', 'taobao'],
      required: true
    },
    openid: {
      type: 'string',
      required: true
    }
  }
};
