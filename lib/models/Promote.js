/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

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
    toJSON: filter.promote
  }
};
