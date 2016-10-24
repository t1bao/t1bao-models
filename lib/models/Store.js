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
    startTime: {
      type: 'datetime',
      columnName: 'start_time',
      defaultsTo: '2100-01-01'
    },
    endTime: {
      type: 'datetime',
      columnName: 'end_time',
      defaultsTo: '2100-01-01'
    },
    approved: {
      type: 'string',
      enum: ['APPROVED', 'UNCHECKED', 'REJECTED'],
      defaultsTo: 'UNCHECKED'
    },
    online: {
      type: 'boolean',
      defaultsTo: false
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
    deliveryFee: {
      type: 'float',
      columnName: 'delivery_fee',
      defaultsTo: 0.0
    },
    deliveryLimit: {
      type: 'float',
      columnName: 'delivery_limit',
      defaultsTo: 0.0
    },
    deliveryDistance: {
      type: 'float',
      columnName: 'delivery_distance',
      defaultsTo: 0.0
    },
    toJSON: filter.store
  }
};
