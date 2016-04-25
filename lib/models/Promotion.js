/**
 * Promote.js
 *
 * @description :: The promotion model
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

 /* eslint camelcase: 0 */
 /* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    title: 'string',
    url: 'string',
    business_concrete_template: {
      type: 'string'
    },
    note: {
      type: 'string'
    },
    business_channel: {
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
