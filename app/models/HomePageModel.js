var mongoose = require('mongoose');

var HomePageModelSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    URL:String
})

var HomePageModel = mongoose.model("HomePageModel", HomePageModelSchema);

module.exports = HomePageModel;
