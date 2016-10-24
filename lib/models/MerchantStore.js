module.exports = {
  attributes: {
    merchant: {
      model: 'merchant',
      required: true,
      unique: true
    },
    store: {
      model: 'store',
      required: true,
      unique: true
    }
  }
};
