/**
 * StoreMerchandise.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    merchandise: {
      model: 'storemerchandise'
    },
    price: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'time',
      defaultsTo: Date.now
    }
  }
};
