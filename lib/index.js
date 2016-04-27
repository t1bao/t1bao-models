'use strict';
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var Waterline = require('waterline');

function onInit(models, next) {
  return function __onInit(error, ontology) {
    if (error) {
      throw new Error('Waterline: ' + error);
    }
    var results = {};
    for (var i = 0; i < models.length; i++) {
      var name = models[i];
      results[name] = ontology.collections[name.toLowerCase()];
    }
    next(results);
  };
}
module.exports = {
  __onInit: onInit,
  init: function init(config, options, next) {
    var models = [];
    var waterline = new Waterline();
    var files = fs.readdirSync(path.resolve(__dirname, 'models/'));
    for (var i = 0; i < files.length; i++) {
      var name = path.basename(files[i], '.js');
      var model = _.extend({}, require('./models/' + name));
      model.identity = name.toLowerCase();
      for (var k in options) {
        if (typeof k === 'string') {
          model[k] = options[k];
        }
      }
      var connection = Waterline.Collection.extend(model);
      waterline.loadCollection(connection);
      models.push(name);
    }
    waterline.initialize(config, onInit(models, next));
  }
};
