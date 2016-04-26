/* eslint space-before-function-paren: 0 */
/* eslint camelcase: 0 */

var moment = require('moment');

function toJSON() {
  var obj = this.toObject();
  var create_time = obj.createdAt;
  var update_time = obj.updatedAt;
  delete obj.createdAt;
  delete obj.updatedAt;
  obj.create_time = create_time;
  obj.update_time = update_time;
  if (obj.start_time) {
    obj.start_time = moment(obj.start_time).format('YYYY-MM-DD HH:mm');
  } else {
    obj.start_time = moment(new Date(0)).format('YYYY-MM-DD HH:mm');
  }
  if (obj.end_time) {
    obj.end_time = moment(obj.end_time).format('YYYY-MM-DD HH:mm');
  } else {
    obj.end_time = moment(new Date(0)).format('YYYY-MM-DD HH:mm');
  }
  return obj;
}

var filter = {
  merchandise: toJSON,
  promote: toJSON,
  store: function toStore() {
    var obj = this.toObject();
    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.type;
    delete obj.logo;
    if (this.logo && this.logo.url) {
      obj.logo = this.logo.url;
    }
    return obj;
  },
  storePosition: function() {
    var obj = this.toObject();
    delete obj.id;
    delete obj.store;
    return obj;
  },
  user: function() {
    var obj = this.toObject();
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

module.exports = filter;
