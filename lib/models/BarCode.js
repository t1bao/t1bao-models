/**
 * BarCode.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,
  attributes: {
    code: {
      type: 'string',
      required: true
    },
    format: {
      type: 'string',
      required: true
    },
    approved: {
      type: 'boolean',
      defaults: false
    },
    merchandise: {
      model: 'merchandise'
    }
  }
};
