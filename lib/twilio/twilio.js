require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
const numbers = [
  process.env.JENA_PHONE_NUMBER, 
  process.env.JON_PHONE_NUMBER, 
  process.env.ANDREW_PHONE_NUMBER, 
  process.env.KATIE_PHONE_NUMBER, 
  process.env.PERRY_PHONE_NUMBER, 
  process.env.ROSALIE_PHONE_NUMBER
];

Promise.all(
  numbers.map(number => {
    return client.messages.create({
      to: number,
      from: '+19712333809',
      body: 'Test message from Twilio!'
    });
  })
)
  .then(() => {
    console.log('Messages sent!');
  })
  .catch(err => console.error(err));
  
