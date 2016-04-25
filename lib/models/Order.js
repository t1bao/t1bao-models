/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var states = ['CREATED', 'PAID', 'ACCEPTED', 'DELIVERED', 'UNREACHABLE', 'RECEIVED', 'COMMENTED', 'FINISHED', 'CANCELLED'];
module.exports = {
  states: states,
  schema: true,
  autoCreateAt: false,
  autoUpdateAt: false,
  attributes: {
    store: {
      model: 'store',
      required: true
    },
    user: {
      model: 'user',
      required: true
    },

    logo: {
      type: 'url'
    },

    receiver: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    no: {
      type: 'string',
      unique: true
    },
    summary: {
      type: 'string'
    },
    // 总数量
    total: {
      type: 'int'
    },
    state: {
      type: 'string',
      enum: states
    },
    events: {
      type: 'json'
    },
    note: 'string',
    merchandises: {
      type: 'json'
    },
    payment: {
      type: 'string',
      enum: [
        'onsite',
        'online'
      ]
    },
    delivery: {
      type: 'string',
      enum: [
        'self',
        'express',
        'wind'
      ]
    },
    merchandise_fee: {
      type: 'string'
    },
    wrapper_fee: {
      type: 'string'
    },
    delivery_fee: {
      type: 'string'
    },
    discount_fee: {
      type: 'string'
    },
    total_fee: {
      type: 'string'
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
