/* eslint camelcase: 0 */
/* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    user: {
      model: 'user'
    },
    // 需要编号
    store: {
      model: 'store'
    },
    // 后台店员添加会员，默认为空
    clerk: {
      model: 'storeclerk'
    },
    name: {
      type: 'string'
    },
    status: {
      type: 'integer',
      defaultsTo: '0'
      // new, cancel, acknowledged.
    },
    token: {
      type: 'integer'
    },
    phone: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'register_time',
      defaultsTo: Date.now
    },
    // 通过时间
    permitted_time: {
      type: 'datetime'
    },
    // 积分
    score: 'int',
    updatedAt: {
      type: 'datetime',
      columnName: 'update_time',
      defaultsTo: Date.now
    }
  }
};
