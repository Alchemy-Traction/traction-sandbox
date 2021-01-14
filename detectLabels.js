require('dotenv').config();
const AWS = require('aws-sdk');
const handleURL = require('./handleURL');

//our AWS access details
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const ourImage = 'https://p1.pxfuel.com/preview/43/831/824/frogs-curious-funny-figures.jpg';

handleURL(ourImage, (err, data) => {
  if(err) {
    throw new Error(err);
  }

  const rekognition = new AWS.Rekognition();

  rekognition.detectLabels({
    Image: {
      Bytes: data
    },
    MaxLabels: 20,
    MinConfidence: 70 
  },
  (err, data) => {
    console.log(data);
  }); 
});
