/**
 * UserExtra.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true,
      unique: true
    },
    nickname: 'string',
    idcard: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    score: {
      type: 'integer',
      defaultsTo: 0
    },
    gender: {
      type: 'integer',
      defaultsTo: 0
    },
    birthday: {
      type: 'date',
      defaultsTo: '1960-01-01'
    },
    intro: {
      type: 'string'
    },

    logo: {
      model: 'image'
    },

    // Member Card No.
    no: {
      type: 'string'
    }
  }
};
