/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var filter = require('../filter');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    address: 'string',
    phone: 'string',
    intro: 'string',
    type: 'string',
    start_time: 'string',
    end_time: 'string',
    approved: {
      type: 'string',
      enum: ['APPROVED', 'UNCHECKED', 'REJECTED'],
      defaultsTo: 'UNCHECKED'
    },
    domain: {
      type: 'string',
      unique: true
    },
    createdAt: {
      type: 'datetime',
      columnName: 'create_time',
      defaultsTo: Date.now
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'login_time',
      defaultsTo: Date.now
    },
    logo: {
      model: 'image'
    },

    position: {
      model: 'storeposition'
    },
    delivery: {
      type: 'boolean',
      defaultsTo: false
    },
    delivery_fee: {
      type: 'float',
      defaultsTo: 0.0
    },
    delivery_limit: {
      type: 'float',
      defaultsTo: 0.0
    },
    delivery_distance: {
      type: 'float',
      defaultsTo: 0.0
    },
    toJSON: filter.store
  }
};
