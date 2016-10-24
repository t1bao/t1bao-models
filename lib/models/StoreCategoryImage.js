/**
 * SpecialImage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    storeCategory: {
      model: 'storecategory',
      via: 'images'
    },
    image: {
      model: 'image'
    },
    order: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};
