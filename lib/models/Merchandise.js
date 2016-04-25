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
    name: 'string',
    brand: 'string',
    desc: 'text',
    online: {
      type: 'boolean',
      defaultsTo: 0
    },
    images: {
      collection: 'merchandiseimage',
      via: 'merchandise'
    },
    official: {
      type: 'boolean',
      defaultsTo: false
    },
    toJSON: function() {
      var obj = this.toObject();
      var create_time = obj.createdAt;
      var update_time = obj.updatedAt;
      delete obj.createdAt;
      delete obj.updatedAt;
      obj.create_time = create_time;
      obj.update_time = update_time;
      return obj;
    }
  }
};
