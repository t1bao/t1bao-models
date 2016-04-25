/**
 * Promote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  schema: true,
  attributes: {
    user: {
      model: 'user'
    },
    name: {
      type: 'string'
    },
    score: {
      type: 'integer'
    },
    // 商品id
    merchandise_id: {
      type: 'int'
    },
    content: {
      type: 'string'
    },
    images: {
      type: 'text'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'create_time',
      defaultsTo: function() {
        return new Date();
      }
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'update_time',
      defaultsTo: function() {
        return new Date();
      }
    }
  }
};
