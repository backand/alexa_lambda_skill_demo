
var request = require('request');

exports.backandCallback = function (parameters, userProfile, respondToBackand) {
  var restaurant = parameters['restaurant'];
  request('https://opentable.herokuapp.com/api/restaurants?name=' + restaurant, function (error, response, body) {
    console.log(body);
    var body_obj = JSON.parse(body);
    var response = "No, I cannot find them online.";
    if(body_obj.restaurants.length > 0) {
      response = "I would, but they are on open table, so you can do it yourself.";
    }

    // success handling
    respondToBackand(null, {"message":response});
  });
};
