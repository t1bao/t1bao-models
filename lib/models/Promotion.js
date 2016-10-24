/**
 * Promote.js
 *
 * @description :: The promotion model
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    title: 'string',
    url: 'string',
    businessConcreteTemplate: {
      type: 'string',
      columnName: 'business_concrete_template'
    },
    note: {
      type: 'string'
    },
    businessChannel: {
      type: 'string',
      columnName: 'business_channel'
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

