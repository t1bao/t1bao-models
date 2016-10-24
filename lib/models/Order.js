/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
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
    merchandisFee: {
      type: 'string',
      columnName: 'merchandise_fee'
    },
    wrapperFee: {
      type: 'string',
      columnName: 'merchandise_fee'
    },
    deliveryFee: {
      type: 'string',
      columnName: 'delivery_fee'
    },
    discountFee: {
      type: 'string',
      columnName: 'discount_fee'
    },
    totalFee: {
      type: 'string',
      columnName: 'total_fee'
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
