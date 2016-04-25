/**
 * StorePosition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

 /* eslint camelcase: 0 */
 /* eslint space-before-function-paren: 0 */

module.exports = {
  attributes: {
    store: {
      model: 'store'
    },
    latitude: {
      type: 'string'
    },
    longitude: {
      type: 'string'
    },
    altitude: {
      type: 'string'
    },
    accuracy: {
      type: 'string'
    },
    altitude_accuracy: {
      type: 'string'
    },
    heading: {
      type: 'string'
    },
    speed: {
      type: 'string'
    },
    geohash: {
      type: 'string'
    },
    toJSON: function() {
      var obj = this.toObject();
      // delete obj.geohash;
      delete obj.id;
      delete obj.store;
      return obj;
    }
  }
};
