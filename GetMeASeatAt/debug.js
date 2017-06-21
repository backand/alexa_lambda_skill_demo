var util = require('util');
var handler = require('./handler.js').handler;

var parameters = {
  "userInput": {},
  "parameters": {runBackandSDKDemo: false},
  "userProfile": {}
};

handler(parameters, {}, function (error, result) {
  if (!error) {
    console.log("success: ", util.format("%j", result));
    process.exit(0);
  }
  else {
    console.log(error);
    process.exit(1);
  }
});

