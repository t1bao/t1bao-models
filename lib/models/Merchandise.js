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
    toJSON: filter.merchandise
  }
};
