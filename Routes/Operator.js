// routes.js
const { Router } = require('express');
const { addnewOperator } = require('../controller/OperatorController.js');


const OperatorRoute = Router(); // Create an instance of the Router




///Operator Router
OperatorRoute.post('/addnewOperator',addnewOperator);



module.exports = OperatorRoute; // Export the router instance directly
