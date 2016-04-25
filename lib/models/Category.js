/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  schema: true,
  attributes: {
    name: 'string',
    parent_id: {
      type: 'int'
    },
    images: {
      collection: 'categoryimage',
      via: 'category'
    }
  }
};
