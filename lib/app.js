const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/incoming-sms', require('./controllers/incoming-sms'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
