/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  current: function current() {
    return new Date();
  },
  toJSON: function toJSON(obj) {
    obj = obj || this ? this.toObject() : {};
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
};
