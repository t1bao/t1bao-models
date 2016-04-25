/* eslint space-before-function-paren: 0 */
/* eslint camelcase: 0 */


module.exports = {
  store: function() {
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
  user: function(obj) {
    if (!obj) {
      if (this.toObject) {
        obj = this.toObject();
      } else {
        obj = {};
      }
    }
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
