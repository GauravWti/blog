// routes.js
const { Router } = require('express');
const { addnewMarketingEmp } = require('../controller/MarketingController.js');

const MarketingRoute = Router(); // Create an instance of the Router




// Marketing controller
MarketingRoute.post('/addnewMarketing',addnewMarketingEmp);
module.exports = MarketingRoute; // Export the router instance directly
