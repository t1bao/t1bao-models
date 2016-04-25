/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

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
      defaultsTo: function() {
        return new Date();
      }
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'login_time',
      defaultsTo: function() {
        return new Date();
      }
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
    toJSON: function() {
      var obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;
      delete obj.type;
      delete obj.logo;
      if (this.logo && this.logo.url) {
        obj.logo = this.logo.url;
      }
      return obj;
    }
  }
};
