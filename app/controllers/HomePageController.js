let HomePageModel = require('../models/HomePageModel');

let HomePageController = {

    getAllProjects:function(req, res){

        HomePageModel.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('HomePage', {projects});
        })
    },

    createProject:function(req, res){
        let HomePage = new HomePage(req.body);

        project.save(function(err, HomePageModel){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(HomePageModel);
                res.redirect('/HomePageModel');
            }
        })
    }
}

module.exports = HomePageController;
