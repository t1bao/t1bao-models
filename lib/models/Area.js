/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  schema: true,
  tableName: 'area',
  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
    name: 'string',
    type: 'string',
    parent_id: 'int',
    images: {
      collection: 'areaimage',
      via: 'area'
    }
  }
};
