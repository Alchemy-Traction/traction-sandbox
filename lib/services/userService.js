module.exports = class UserService {
  static async create(phoneNumber) {
    // (user.insert) create a new user in the database
    // sendSms(#, 'send me a selfie you bozo') create an SMS 
  }
  static async completeSignup(phoneNumber, image) {
    // verifyFace(image) possible AWS face verify , if True next line
    //update the db with image  --> user.user_photo
    // sendSms(#, "")
  

  }
};

//look at twilio.js for inspiration
//

//reminder, we will need to create a model
