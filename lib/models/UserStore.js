module.exports = {
  attributes: {
    user: {
      model: 'user',
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
