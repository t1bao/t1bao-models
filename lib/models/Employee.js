/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var bcrypt = require('bcrypt');
var crypto = require('crypto');

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
      defaultsTo: function() {
        return new Date();
      }
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'login_time',
      defaultsTo: function() {
        return new Date();
      }
    },
    login_count: 'integer',

    isPassword: function(password) {
      if (!password) {
        return false;
      }
      if (this.password.toLowerCase() === crypto.createHash('md5').update(password + this.salt).digest('hex').toLowerCase()) {
        return true;
      }
      return false;
    },
    updatePassword: function(password) {
      this.password = crypto.createHash('md5').update(password + this.salt).digest('hex');
    }
  },

  beforeCreate: function(employee, next) {
    bcrypt.genSalt(6, function(err, salt) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        employee.password = crypto.createHash('md5').update(employee.password + salt).digest('hex');
        employee.salt = salt;
        next();
      }
    });
  }
};
