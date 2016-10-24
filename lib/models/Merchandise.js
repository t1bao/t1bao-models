var filter = require('../filter');

module.exports = {
  attributes: {
    name: 'string',
    brand: 'string',
    desc: 'text',
    category: {
      model: 'category'
    },
    online: {
      type: 'boolean',
      defaultsTo: 0
    },
    images: {
      collection: 'merchandiseimage',
      via: 'merchandise'
    },
    official: {
      type: 'boolean',
      defaultsTo: false
    },
    toJSON: filter.merchandise
  }
};
