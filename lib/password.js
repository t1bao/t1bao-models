/* eslint space-before-function-paren: 0 */

var crypto = require('crypto');
var util = {
  beforeCreate: function(model, next) {
    var salt = crypto.randomBytes(32);
    model.password = util.generate(model.password, salt);
    model.salt = salt;
    next();
  },
  beforeUpdate: function(model, next) {
    model.password = util.generate(model.password, model.salt);
    next();
  },
  generate: function(password, salt) {
    return crypto.createHash('md5').update(password + salt).digest('hex');
  },
  check: function(saved, password, salt) {
    if (!password) {
      return false;
    }
    if (saved === util.generate(password, salt)) {
      return true;
    }
    return false;
  }
};

module.exports = util;
