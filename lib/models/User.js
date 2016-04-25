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
  attributes: {
    username: {
      type: 'string',
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
      model: 'userextra'
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
      if (this.password.toLowerCase() === crypto.createHash('md5').update(password + this.salt).digest('hex').toLowerCase()) {
        return true;
      }
      return false;
    },
    updatePassword: function(password) {
      this.password = crypto.createHash('md5').update(password + this.salt).digest('hex');
    }
  },

  beforeCreate: function(user, next) {
    bcrypt.genSalt(6, function(err, salt) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        user.password = crypto.createHash('md5').update(user.password + salt).digest('hex');
        user.salt = salt;
        next();
      }
    });
  },
  toJSON: function(obj) {
    if (!obj) {
      if (this.toObject) {
        obj = this.toObject();
      } else {
        obj = {};
      }
    }
    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.salt;
    delete obj.password;
    delete obj.login_ip;
    delete obj.register_ip;
    delete obj.login_count;
    delete obj.extra;
    if (this.logo) {
      obj.logo = this.logo.url;
    }
    return obj;
  }
};
