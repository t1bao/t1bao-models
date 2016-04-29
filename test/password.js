/* eslint space-before-function-paren: 0 */

var password = require('../lib/password');
var saved = null;
var plain = 'sdofsofddf';
var salt = 'sdfsfd';
var user = {password: plain};
var assert = require('assert');

describe('password', function () {
  it('should be able to generate and check password', function () {
    saved = password.generate(plain, salt);
    assert(password.check(saved, plain, salt));
  });

  it('should be able to check null password', function() {
    assert(!password.check(saved, null, salt));
    assert(!password.check('abc', plain, salt));
  });

  it('should be able to do something before create', function(done) {
    password.beforeCreate(user, function() {
      assert(user.salt !== null);
      assert(typeof user.salt === 'string');
      assert(password.check(user.password, plain, user.salt));
      done();
    });
  });

  it('should be able to do something before update', function(done) {
    var psd = 'new password';
    user.password = psd;
    password.beforeUpdate(user, function() {
      assert(user.password !== psd);
      assert(password.check(user.password, psd, user.salt));
      done();
    });
  });

  it('should not be able to do something before update because of none object specified', function(done) {
    var a = null;
    password.beforeUpdate(a, function() {
      assert(!a);
      done();
    });
  });

  it('should not be able to do something before update because of none object specified', function(done) {
    var a = {};
    password.beforeUpdate(a, function() {
      assert(!a.password);
      assert(!a.salt);
      done();
    });
  });

  it('should not be able to do something before update because of none object specified', function(done) {
    var a = {password: 'sfdosf'};
    password.beforeUpdate(a, function() {
      assert(!a.salt);
      done();
    });
  });

  it('should not be able to do something before update because of none object specified', function(done) {
    var a = {salt: 'sfdosf'};
    password.beforeUpdate(a, function() {
      assert(!a.password);
      done();
    });
  });
});
