// require dependincies
var express = require('express');
var router = express.Router();
var loginController = require('./controllers/loginController');
var RegisterController = require('./controllers/RegisterController');
var HomePageController = require('./controllers/HomePageController');
// add routes
router.post('/LG', loginController.GetStudentAcc);
router.get('/', loginController.LoginStudent);
//router.post('/RG', RegisterController.);

//router.post('/HomePage', HomePageController.getAllProjects);
//router.get('/HomePage',HomePageModel.getAllProjects);


//router.post('/loginModel', loginPageController.createProject);

// export router

module.exports = router;
