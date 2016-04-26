'use strict';
var models = {};
var fs = require('fs');
var path = require('path');

var files = fs.readdirSync(path.resolve(__dirname, 'models/'));
for (var i = 0; i < files.length; i++) {
  var name = path.basename(files[i], '.js');
  models[name] = require('./models/' + files[i]);
}
module.exports = models;
