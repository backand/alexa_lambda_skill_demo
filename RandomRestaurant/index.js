var request = require('request');

exports.backandCallback = function (parameters, userProfile, respondToBackand) {
  // a response data example
  var city = parameters['city']
  request('https://api.yelp.com/v3/businesses/search?location=' + city, function (error, response, body) {
    var output_msg = "Since you can't decide, I picked ";
    var bus_list = JSON.parse(body).businesses;
    var bus_list_length = bus_list.length;
    var random_restaurant = Math.round(Math.random() * bus_list_length);
    output_msg += bus_list[random_restaurant]['name'] + " for you.";
    respondToBackand(null, {"message":output_msg});
  }).auth(null, null, true, 'YELP_API_KEY');

};
