let loginModel = require('../models/loginModel');

let loginController = {

    GetStudentAcc:function(req, res){
      loginModel.find({username: req.body.Username}, function(err){
         if(err){
           res.send(err.message)
         }

        }

      )}
    ,

      LoginStudent:function(req, res){
        loginModel.find(function(err){
        if(err){
          res.send(err.message);
         }
         else {
          res.render('Homepage');
         }
      })

}
}

module.exports = loginController;
