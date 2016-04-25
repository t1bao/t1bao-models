/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    barcode: {
      model: 'barcode'
    },
    store: {
      model: 'store'
    },
    merchandise: {
      model: 'merchandise'
    },
    bound: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
