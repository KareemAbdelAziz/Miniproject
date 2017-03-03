let StudentRegister = require('../models/RegisterModel');

let RegisterController = {
//First you find and search to see if attributes you assigned don't exist for new users in the DB
    getAllStudents:function(req, res){

        StudentRegister.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('RegisterPage', {projects});
        })
    },
//Second if the attributes are unique then they are saved in the DB
    createStudent:function(req, res){
        let Register = new Register(req.body);

        Register.save(function(err, RegisterModel){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(RegisterModel);
                res.redirect('/LoginPage');
            }
        })
    }
}

module.exports = RegisterController;
