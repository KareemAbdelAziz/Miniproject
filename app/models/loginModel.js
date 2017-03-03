var mongoose = require('mongoose');

var loginModelSchema = mongoose.Schema({
  Username:{
          type:String,
          required:true,
          unique:true
        },
      Password:{
            type:String,
            required:true,
        }
  })

var loginModel = mongoose.model("GetStudentAcc", loginModelSchema);

module.exports = loginModel;
