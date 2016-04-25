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

function genPassword(password, salt) {
  return crypto.createHash('md5').update(password + salt).digest('hex');
}

module.exports = {
  schema: true,
  tableName: 'admin',
  attributes: {
    username: {
      type: 'string',
      maxLength: 20,
      minLength: 3,
      required: 'true'
    },
    password: {
      type: 'string',
      maxLength: 128,
      required: 'true'
    },
    salt: {
      type: 'string'
    },

    login_ip: 'string',
    register_ip: 'string',
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
      if (this.password === genPassword(password, this.salt)) {
        return true;
      }
      return false;
    },
    updatePassword: function(password) {
      this.password = genPassword(password, this.salt);
    }
  },
  beforeCreate: function(user, next) {
    bcrypt.genSalt(6, function(err, salt) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        user.password = genPassword(user.password, salt);
        user.salt = salt;
        next();
      }
    });
  }
};
