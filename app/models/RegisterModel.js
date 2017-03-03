var mongoose = require('mongoose');

var RegisterModelSchema = mongoose.Schema({
Username:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
          type:String,
          required:true,
      }
})

var RegisterModel = mongoose.model("RegisterModel", RegisterModelSchema);

module.exports = RegisterModel;
