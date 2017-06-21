var handler = require('./index.js').handler;

var parameters = {
  "session": {
    "sessionId": "SessionId.7729a1ff-b23c-4cff-88a2-d7bb4f326718",
    "application": {
      "applicationId": "amzn1.ask.skill.c1dc83c2-33a4-4bd0-9c76-b11feddd271a"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AGR2VELK7OCL2DOTGZERX637SPSPDIQTF36JQRBPX6RPED2C5FSO5VGR6C7GQCP4QFLHGDQNU2MAYLH2LIZZQXHASRSF6XXADISV43Z4AIC2W7YHYBES2PIDYAAJ6FHLXIQPJU5VW6J4KXZD7BSWY3QBDATX5XQL2JN5NMEICT2UHGUDDAB7BFKZ4N6DRSUVDIWNDP4T6GP3FEQ"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.3d4fa94b-5b73-49fe-8e0f-d43169dba3c9",
    "locale": "en-US",
    "timestamp": "2017-06-07T21:39:10Z",
    "intent": {
      "name": "ListFunctions",
      "slots": {}
    }
  },
  "version": "1.0"
};

var open_table_parameters = {
  "session": {
    "sessionId": "SessionId.37802e84-a767-4238-a66c-50bedc2d4d6d",
    "application": {
      "applicationId": "amzn1.ask.skill.c1dc83c2-33a4-4bd0-9c76-b11feddd271a"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AFNB5ZHIJA4AIMATKOW5RHWGWPTHTIZ4MZFBE42SUJBAI2Q22ZOXDY3XV6EDK464KXHVMC5ASWE54F2YMEDONZ3RQPYNXZJHNWIIFTFGSSZVJCJSYTZRD3H44TMLWMWZEYCSHHS24YSINCKHYKHE5BYAQUN47TGACLQTL252PXYPXRLLYGDHHG2KFKBEX336GTETBDJMKEF7MMA"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.87c9d808-2c1c-44f1-aa19-c0a6056c3d35",
    "locale": "en-US",
    "timestamp": "2017-06-20T23:15:44Z",
    "intent": {
      "name": "RestaurantOnOpenTable",
      "slots": {
        "restaurant": {
          "name": "restaurant",
          "value": "cold storage"
        }
      }
    }
  },
  "version": "1.0"
};

var run_functions_parameters = {

  "session": {
    "sessionId": "SessionId.5e5d92b1-bab1-4b27-aa25-28ab65fec07c",
    "application": {
      "applicationId": "amzn1.ask.skill.c1dc83c2-33a4-4bd0-9c76-b11feddd271a"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AFNB5ZHIJA4AIMATKOW5RHWGWPTHTIZ4MZFBE42SUJBAI2Q22ZOXDY3XV6EDK464KXHVMC5ASWE54F2YMEDONZ3RQPYNXZJHNWIIFTFGSSZVJCJSYTZRD3H44TMLWMWZEYCSHHS24YSINCKHYKHE5BYAQUN47TGACLQTL252PXYPXRLLYGDHHG2KFKBEX336GTETBDJMKEF7MMA"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.80e6a0d2-cef9-479a-b9e0-5a0d1d357c07",
    "locale": "en-US",
    "timestamp": "2017-06-20T22:39:23Z",
    "intent": {
      "name": "ListRestaurants",
      "slots": {
        "city": {
          "name": "city",
          "value": "Lindenhurst"
        }
      }
    }
  },
  "version": "1.0"

};

handler(open_table_parameters, {succeed:function(result){
    console.log("success: ", JSON.stringify(result, null, 2));
    process.exit(0);
}, fail:function(error){
    console.error("error: ", error);
    process.exit(1);
}});
