/**
 * StoreMerchandise.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    merchandise: {
      model: 'merchandise',
      required: true
    },
    store: {
      model: 'store',
      required: true
    },
    price: {
      type: 'float'
    },
    sells: {
      type: 'int'
    },
    visits: {
      type: 'int'
    },
    online: {
      type: 'boolean',
      defaultsTo: false
    },
    order: {
      type: 'int',
      defaultsTo: 0
    },
    category: {
      model: 'storecategory',
      required: true
    }
  }
};
