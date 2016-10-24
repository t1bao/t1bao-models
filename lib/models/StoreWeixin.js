/**
 * StorePosition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    // Enable MerchantId or Not
    enable: {
      type: 'boolean',
      defaultsTo: false,
      boolean: true
    },
    // 对应 sub_mch_id
    merchantId: {
      type: 'string',
      columnName: 'merchant_id'
    }
  }
};
