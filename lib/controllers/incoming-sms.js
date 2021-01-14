const { Router } = require('express');

module.exports = Router()

  .post('/', (req, res) => {
    console.log(req.body.From,
      req.body.Body,
      req.body.MediaUrl0);
    res.end('');

  });


