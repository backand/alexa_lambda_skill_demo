
// Alexa SDK for alexa skills
var Alexa = require('alexa-sdk');

// HTTP COMMS
const backand = require('@backand/nodejs-sdk');
backand.init({
     appName: 'BACKAND_APP_NAME',
     anonymousToken: 'BACKAND_ANONYMOUS_TOKEN'
});;

var handlers = {
  'ListRestaurants': function(event) {
    // Alexa SDK operates off "this", so we need to store correct context for the callback
    var context = this;
    var city = context.event.request.intent.slots.city.value;

    backand.fn.get("FeedMeIn", {"city": city}).then(function(data){
      context.emit(':tell',data.data.message);
    }).catch(function(error){
        console.log('FAIL');
        console.log(error);
        context.emit(':tell','There was an error afoot.')
    });
  },
  'RestaurantOnOpenTable': function(event) {
    // Alexa SDK operates off "this", so we need to store correct context for the callback
    var context = this;
    var restaurant = context.event.request.intent.slots.restaurant.value;

    backand.fn.get("GetMeASeatAt", {"restaurant": restaurant}).then(function(data){
      context.emit(':tell',data.data.message);
    }).catch(function(error){
      console.log('FAIL');
      console.log(error);
      context.emit(':tell','There was an error afoot.')
    });
  },
  'RandomRestaurant': function(event) {
    // Alexa SDK operates off "this", so we need to store correct context for the callback
    var context = this;
    var city = context.event.request.intent.slots.city.value;

    backand.fn.get("RandomRestaurant", {"city": city}).then(function(data){
      context.emit(':tell',data.data.message);
    }).catch(function(error){
      console.log('FAIL');
      console.log(error);
      context.emit(':tell','There was an error afoot.')
    });
  },
  'Unhandled': function () {
    console.log('FAIL from UNHANDLED');
    this.emit(':tell', 'There was an error. in unhandled');
  }
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
