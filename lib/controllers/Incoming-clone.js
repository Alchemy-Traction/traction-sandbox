const { Router } = require('express');
const detectLabels = require('../../detectLabels.js');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


module.exports = Router()

  .post('/', checkForExistence, (req, res, next) => {
    
     // sent to middleware

    
        res.contentType('text/xml');
        console.log(response.toString());
        res.end(response.toString());
      })
      .catch(next);

  });




