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
    title: 'string',
    url: 'string',
    intro: 'text',
    images: {
      collection: 'promoteimage',
      via: 'promote'
    },
    start_time: {
      type: 'datetime',
      defaultsTo: '2100-01-01'
    },
    end_time: {
      type: 'datetime',
      defaultsTo: '2100-01-01'
    },
    valid: {
      type: 'boolean',
      defaultsTo: false
    },
    toJSON: function() {
      var moment = require('moment');
      var obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;
      if (obj.start_time) {
        obj.start_time = moment(obj.start_time).format('YYYY-MM-DD HH:mm');
      } else {
        obj.start_time = moment(new Date(0)).format('YYYY-MM-DD HH:mm');
      }
      if (obj.end_time) {
        obj.end_time = moment(obj.end_time).format('YYYY-MM-DD HH:mm');
      } else {
        obj.end_time = moment(new Date(0)).format('YYYY-MM-DD HH:mm');
      }
      return obj;
    }
  }
};
