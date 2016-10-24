/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var filter = require('../filter');

module.exports = {
  attributes: {
    title: 'string',
    url: 'string',
    intro: 'text',
    images: {
      collection: 'promoteimage',
      via: 'promote'
    },
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
    valid: {
      type: 'boolean',
      defaultsTo: false
    },
    toJSON: filter.promote
  }
};
