/**
 * Settings.js
 *
 * @description :: Global Settings for all
 * @docs
 */
module.exports = {
  attributes: {
    no: {
      type: 'string'
    },
    value: {
      type: 'json',
      required: true
    },
    createdTime: {
      type: 'datetime',
      columnName: 'created_time',
      defaultsTo: Date.now
    }
  }
};
