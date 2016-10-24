module.exports = {
  attributes: {
    barcode: {
      model: 'barcode'
    },
    store: {
      model: 'store'
    },
    merchandise: {
      model: 'merchandise'
    },
    bound: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
