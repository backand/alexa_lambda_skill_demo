var backandCallback = require('./index.js').backandCallback;
var util = require('util');

exports.handler = function (event, context, callback) {
  console.log('Received event:', JSON.stringify(event, null, 2));
  try {
    backandCallback(event.parameters, event.userProfile, function (error, result) {

      if (error) {

        if(error.stack){
          callback(error.stack);
        } else{
          callback(typeof error === 'object' ? util.format("%j", error) : error);
        }

      } else {

        callback(null, result);

      }
    })
  }
  catch (error) {

    if(error.stack){
      callback(error.stack);
    } else{
      callback(typeof error === 'object' ? util.format("%j", error) : error);
    }

  }
};