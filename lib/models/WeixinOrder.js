/**
 * Settings.js
 *
 * @description :: Global Settings for all
 * @docs
 */

 /* eslint camelcase: 0 */
 /* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    no: {
      type: 'string'
    },
    value: {
      type: 'json',
      required: true
    },
    created_time: {
      type: 'datetime',
      defaultsTo: function() {
        return new Date();
      }
    }
  }
};
