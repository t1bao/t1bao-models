/**
 * Created by Administrator on 2014/11/12.
 */
/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    user: {
      model: 'user'
    },
    // 商品id
    merchandise_id: {
      type: 'string'
    },
    //    is_favourite:{
    //      type:'boolean'
    //    },
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
