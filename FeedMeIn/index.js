var request = require('request');

exports.backandCallback = function (parameters, userProfile, respondToBackand) {
  var locale = parameters['city']
  request('https://api.yelp.com/v3/businesses/search?location=' + locale, function (error, response, body) {

    var output_msg = "So I guess you want food. Here is a quick list of restaurants fresh from Yelp. ";
    var bus_list = JSON.parse(body).businesses;
    console.log(Object.prototype.toString.call(body));//.data["businesses"]);
    var bus_list_length = bus_list.length;

    for(var i = 0; i < 5; i++)
    {
      output_msg += bus_list[i]['name'] + "; "
    }
    respondToBackand(null, {"message":output_msg});
  }).auth(null, null, true, 'YELP_API_KEY');

};
