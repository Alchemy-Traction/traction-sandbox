const sampleData = require('./labelDataSample.json');

function mungeLabels(labels) {
  return labels.Labels.map(item => {
    return {
      body: item.Name
    };
  }).slice(0, 3);
}

console.log(mungeLabels(sampleData));

// module.exports = {
//   mungeLabels
// };


// {

//     "body": "Thank you for your submission. Your image contains these items: Toy, Frog"
   
//    }
