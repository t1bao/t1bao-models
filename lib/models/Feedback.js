/**
* Feedback.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user: {
      model: 'user'
    },
    feedback: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'create_time',
      defaultsTo: Date.now
    }
  }
};
