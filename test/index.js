'use strict';

/* eslint space-before-function-paren: 0 */
/* eslint camelcase: 0 */

var assert = require('assert');
var serverModels = require('../lib');

describe('server-models', function() {
  it('should have all models!', function() {
    for (var k in serverModels) {
      if (typeof k === 'string') {
        var model = serverModels[k];
        assert(typeof model.attributes === 'object');
      }
    }
  });
});
