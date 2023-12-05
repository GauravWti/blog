// routes.js
const { Router } = require('express');
const { login, registeronPanel, getuseridfromJwt } = require('../controller/AuthController.js');


const AuthRouter = Router(); // Create an instance of the Router








// login
AuthRouter.post('/login',login);
AuthRouter.post('/register',registeronPanel);
AuthRouter.get('/accesstoken',getuseridfromJwt)


module.exports = AuthRouter; // Export the router instance directly
