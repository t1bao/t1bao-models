/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var password = require('../password');

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      maxLength: 20,
      minLength: 2,
      unique: true
    },
    password: {
      type: 'string',
      maxLength: 128,
      required: 'true'
    },
    salt: {
      type: 'string'
    },

    email: {
      type: 'email',
      unique: true
    },

    phone: {
      type: 'string',
      unique: true
    },

    extra: {
      model: 'employeeextra'
    },

    login_ip: 'ip',
    register_ip: 'ip',
    createdAt: {
      type: 'datetime',
      columnName: 'register_time',
      defaultsTo: Date.now
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'login_time',
      defaultsTo: Date.now
    },
    login_count: 'integer'
  },
  beforeUpdate: password.beforeUpdate,
  beforeCreate: password.beforeCreate
};
