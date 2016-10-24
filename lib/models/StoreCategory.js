module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    name: 'string',
    parent: {
      type: 'int'
    },
    order: {
      type: 'int',
      defaultsTo: 0
    },
    online: {
      type: 'boolean',
      defaultsTo: false
    },
    images: {
      collection: 'storecategoryimage',
      via: 'storeCategory'
    }
  }
};
