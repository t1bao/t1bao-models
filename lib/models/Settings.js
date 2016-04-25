/**
 * Settings.js
 *
 * @description :: Global Settings for all
 * @docs
 */
module.exports = {
  attributes:
  {
    key:
    {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true
    },
    value:
    {
      type: 'json',
      required: true
    }
  }
};
