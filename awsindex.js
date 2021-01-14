require('dotenv').config();

const AWS = require('aws-sdk');
const fs = require('fs');
//ryan calls this below 'client'
const rekognition = new AWS.Rekognition();

//our AWS access details
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

//DETECT LABELS
rekognition.detectLabels({
  Image: {
    Bytes: fs.readFileSync('./data/running-champ.jpeg') //enjoy changing the picture in /data
  },
  MaxLabels: 10,
  MinConfidence: 70 
},
(err, data) => {
  console.log(data);
});
