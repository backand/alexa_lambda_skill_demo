# Amazon Alexa Skill for Calling AWS Lambda
This skill for Amazon Alexa uses Backand to call AWS Lambda functions via the SDK. It implements a straightforward restaurant management scheme. It uses some external API calls to demonstrate capability, but as a whole is only intended to be a guiding framework for these types of actions.

# Folders, and where they belong
- alexa_lambda - This folder contains the custom Alexa skill code, to be stored in an independent AWS Lambda function. This function is set as the source for the Alexa Custom Skill we will build to invoke our Lambda functions. It should be deployed as a stand-alone Amazon Lambda function. As it is intended to be a custom Alexa skill, it is currently limited to US-EAST-1 or Europe
- FeedMeIn - This contains AWS Lambda Node.js code, using Backand's custom lambda actions as a template. It handles the "feed me in {city}" command from Amazon Alexa. It contacts Yelp to return restaurants in the specified city, then returns the first five restaurant names to Alexa to be spoken back to the user. It should be deployed to a Backand Custom AWS Lambda Action - simply replace the skeleton downloaded with the contents of this folder.
- GetMeASeatAt - This contains AWS Lambda Node.js code, using Backand's custom lambda actions as a template. It handles the "get me a seat at {restaurant}" command from Amazon Alexa. It uses an unofficial OpenTable API to determine whether or not the restaurant named is available on OpenTable. It should be deployed to a Backand Custom AWS Lambda Action - simply replace the skeleton downloaded with the contents of this folder.
- RandomRestaurant - This contains AWS Lambda Node.js code, using Backand's custom lambda actions as a template. It handles the "Pick a place for me in {city}" command from Amazon Alexa. It contacts Yelp, obtains a list of restaurants in the provided city, then returns the name of one at random. It should be deployed to a Backand Custom AWS Lambda Action - simply replace the skeleton downloaded with the contents of this folder

Note - Backand Lambda Function names are intended to be exact. If you change the name of the lambda function for your containing app, you'll need to update alexa_lambda/index.js to use the correct function name for the intent handler.

# Customizing this code for your usage:
There are several places you need to change the code in order to work with this skill set in your own environment:

- alexa_lambda/index.js - Change *BACKAND_APP_NAME* and *BACKAND_ANONYMOUS_TOKEN* to the relevant values for your Backand application
- FeedMeIn/index.js - Change *YELP_API_KEY to your Yelp access token (obtained from their token endpoint, without 'Bearer').
- RandomRestaurant/index.js - Change *YELP_API_KEY* to your Yelp access token (obtained from their token endpoint, without 'Bearer').

# Required parameters
The function alexa_lambda supports the following Alexa intents:

- ListRestaurants - Response handler for function "FeedMeIn"
- RestaurantOnOpenTable - response handler for function "GetMeASeatAt"
- RandomRestaurant - response handler for function "RandomRestaurant"

The intents depend upon the following named slots, which must be provided by Alexa:

- ListRestaurants - needs to support slot name "city", type "AMAZON.US_CITY"
- RestaurantOnOpenTable - needs to support slot name "restaurant", type "AMAZON.LocalBusiness"
- RandomRestaurant - needs to suport slot name "city", type "AMAZON.US_CITY"
