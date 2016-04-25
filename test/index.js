'use strict';

var assert = require('assert');
var serverModels = require('../lib');

describe('server-models', function () {
  it('should have all models!', function () {
    for(var k in serverModels) {
      console.log(serverModels[k]);
    }
    console.log('starg test');
  });
});
