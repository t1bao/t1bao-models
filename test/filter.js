/* eslint space-before-function-paren: 0 */
/* eslint camelcase: 0 */

var assert = require('assert');
var filter = require('../lib/filter');
var moment = require('moment');
var _ = require('lodash');

describe('filter', function() {
  it('should toJSON', function() {
    var time = new Date();
    var time1 = new Date(0);
    var obj = {
      createdAt: time,
      updatedAt: time1,
      start_time: time,
      end_time: time1
    };
    var saved = filter.promote.call({
      toObject: function() {
        return _.extend({}, obj);
      }
    });
    assert(saved.createdAt === undefined);
    assert(saved.updatedAt === undefined);
    assert(saved.createdAt !== obj.createdAt);
    assert(saved.updatedAt !== obj.updatedAt);

    assert(saved.start_time === moment(time).format('YYYY-MM-DD HH:mm'));
    assert(saved.end_time === moment(time1).format('YYYY-MM-DD HH:mm'));
  });

  it('should toJSON 2', function() {
    var time = new Date();
    var time1 = new Date(0);
    var obj = {
      createdAt: time,
      updatedAt: time1
    };
    var saved = filter.promote.call({
      toObject: function() {
        return _.extend({}, obj);
      }
    });
    assert(saved.createdAt === undefined);
    assert(saved.updatedAt === undefined);
    assert(saved.createdAt !== obj.createdAt);
    assert(saved.updatedAt !== obj.updatedAt);

    assert(saved.start_time === moment(new Date(0)).format('YYYY-MM-DD HH:mm'));
    assert(saved.end_time === moment(new Date(0)).format('YYYY-MM-DD HH:mm'));
  });

  it('should store', function() {
    var time = new Date();
    var time1 = new Date(0);
    var obj = {
      createdAt: time,
      updatedAt: time1,
      type: 'type',
      logo: {
        url: 'sdofsfd'
      },
      toObject: function() {
        var tmp = _.extend({}, this);
        delete tmp.toObject;
        return tmp;
      }
    };
    var saved = filter.store.call(obj);
    assert(saved.createdAt === undefined);
    assert(saved.updatedAt === undefined);
    assert(saved.type === undefined);
    assert(saved.logo === obj.logo.url);
  });

  it('should storePosition', function() {
    var obj = {
      id: 'sfd',
      store: 'store',
      ok: 'osodf'
    };
    var saved = filter.storePosition.call({
      toObject: function() {
        return _.extend({}, obj);
      }
    });
    assert(saved.ok === obj.ok);
    assert(saved.id === undefined);
    assert(saved.store === undefined);
  });

  it('should user', function() {
    var time = new Date();
    var time1 = new Date(0);
    var obj = {
      createdAt: time,
      updatedAt: time1,
      salt: 'sls',
      password: 'password',
      login_ip: 'login_ip',
      register_ip: 'register_ip',
      login_count: 'login_count',
      extra: 'ooss',
      dodo: 'ososo'
    };
    var saved = filter.user.call({
      toObject: function() {
        return _.extend({}, obj);
      }
    });
    assert(saved.createdAt === undefined);
    assert(saved.updatedAt === undefined);
    assert(saved.salt === undefined);
    assert(saved.password === undefined);
    assert(saved.login_ip === undefined);
    assert(saved.register_ip === undefined);
    assert(saved.login_count === undefined);
    assert(saved.extra === undefined);
    assert(saved.dodo === obj.dodo);
  });

  it('should user 2', function() {
    var time = new Date();
    var time1 = new Date(0);
    var obj = {
      createdAt: time,
      updatedAt: time1,
      salt: 'sls',
      password: 'password',
      login_ip: 'login_ip',
      register_ip: 'register_ip',
      login_count: 'login_count',
      extra: 'ooss',
      dodo: 'ososo',
      logo: {
        url: 'osos'
      },
      toObject: function() {
        var tmp = _.extend({}, this);
        delete tmp.toObject;
        return tmp;
      }
    };
    var saved = filter.user.call(obj);
    assert(saved.createdAt === undefined);
    assert(saved.updatedAt === undefined);
    assert(saved.salt === undefined);
    assert(saved.password === undefined);
    assert(saved.login_ip === undefined);
    assert(saved.register_ip === undefined);
    assert(saved.login_count === undefined);
    assert(saved.extra === undefined);
    assert(saved.dodo === obj.dodo);
    assert(saved.logo === obj.logo.url);
  });
});
