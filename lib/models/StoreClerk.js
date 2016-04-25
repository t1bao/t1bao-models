/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

var bcrypt = require('bcrypt');
var crypto = require('crypto');
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
    isPassword: function(password) {
      if (!password) {
        return false;
      }
      if (this.password.toLowerCase() === crypto.createHash('md5').update(password).digest('hex').toLowerCase()) {
        return true;
      }
      return false;
    },
    updatePassword: function(password) {
      this.password = crypto.createHash('md5').update(password).digest('hex');
    }
  },
  beforeCreate: function(user, next) {
    bcrypt.genSalt(6, function(err) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        user.password = crypto.createHash('md5').update(user.password).digest('hex');
        next();
      }
    });
  }
};
