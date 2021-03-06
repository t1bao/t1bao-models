'use strict';

/* eslint space-before-function-paren: 0 */
/* eslint camelcase: 0 */

var assert = require('assert');
var sailsMemoryAdapter = require('sails-memory');
var serverModels = require('../lib');

var config = {
  adapters: {
    memory: sailsMemoryAdapter
  },

  connections: {
    default: {
      adapter: 'memory'
    }
  },
  defaults: {
    migrate: 'alter'
  }
};

describe('t1bao-models', function() {
  it('should have all models!', function(done) {
    var models = ['Administrator',
      'Area',
      'AreaImage',
      'Banner',
      'BannerImage',
      'BarCode',
      'Category',
      'CategoryImage',
      'Comment',
      'CommentImage',
      'Employee',
      'EmployeeExtra',
      'Feedback',
      'Image',
      'Merchandise',
      'MerchandiseImage',
      'Merchant',
      'MerchantContacts',
      'MerchantExtra',
      'MerchantFeedback',
      'MerchantStore',
      'MerchantVerificationRequest',
      'OAuthUser',
      'Order',
      'Promote',
      'PromoteImage',
      'Promotion',
      'Settings',
      'Store',
      'StoreBarCode',
      'StoreCategory',
      'StoreCategoryImage',
      'StoreChannel',
      'StoreClerk',
      'StoreImage',
      'StoreMember',
      'StoreMerchandise',
      'StoreMerchandisePriceHistory',
      'StorePosition',
      'StoreWeixin',
      'User',
      'UserAddress',
      'UserExtra',
      'UserFavourite',
      'UserStore',
      'UserSubscribedStore',
      'Weixin',
      'WeixinOrder'
    ];
    serverModels.init(config, {
      connection: 'default'
    }, function(results) {
      for (var k in results) {
        if (typeof k === 'string') {
          console.log(k);
          assert(models.indexOf(k) !== -1);
        }
      }
      done();
    });
  });
  it('should handle error', function() {
    var func = serverModels.__onInit([], function() {});
    var catched = false;
    try {
      func(true);
    } catch (e) {
      catched = true;
    }
    assert(catched);
  });
});
