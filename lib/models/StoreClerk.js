/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var password = require('../password');

module.exports = {
  attributes: {
    password: {
      type: 'string',
      maxLength: 128,
      required: 'true'
    },
    name: 'string',
    phone: 'string',
    // email: 'email',// 不需要
    // 需要编号
    no: {
      type: 'string'
    },
    login_count: 'integer',
    login_ip: 'ip',
    store: {
      model: 'store'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'register_time',
      defaultsTo: Date.now
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'login_time',
      defaultsTo: Date.now
    }
  },
  beforeUpdate: password.beforeUpdate,
  beforeCreate: password.beforeCreate
};
