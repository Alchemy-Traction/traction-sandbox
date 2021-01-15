const { Router } = require('express');
const detectLabels = require('../../detectLabels.js');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


module.exports = Router()

  .post('/', (req, res, next) => {
    console.log(req.body);
    detectLabels(req.body.MediaUrl0)
      .then(labels => {
        console.log(labels);
        const response = new MessagingResponse();
        response.message(`${labels.Labels[0].Name}, ${labels.Labels[1].Name}, ${labels.Labels[2].Name} is what we found.`);
        res.contentType('text/xml');
        console.log(response.toString());
        res.end(response.toString());
      })
      .catch(next);

  });




