// routes.js
const { Router } = require('express');
const { getProfileInfoById } = require('../controller/ProfileController.js');


const ProfileRouter = Router(); // Create an instance of the Router











//profileRouter
ProfileRouter.post('/getprofiledata',getProfileInfoById)



module.exports = ProfileRouter; // Export the router instance directly
