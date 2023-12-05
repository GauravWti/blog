// routes.js
const { Router } = require('express');
const {addnewvender, addCarquantitytoParticularVender, getAllCarsofParticularuser, getallVender, addReservationToVender, setCarNumbertovender, getAllBookingIdofParticularVender, getstatusofCarTransactionforVendor, getAllBookingCarOfParticularVendor, getVendorifCarPresent} = require('../controller/VenderController.js');


const VendorRouter = Router(); // Create an instance of the Router







VendorRouter.post('/addvender',addnewvender);
VendorRouter.post('/addCarquantity',addCarquantitytoParticularVender);
VendorRouter.post('/getAllCars',getAllCarsofParticularuser);
VendorRouter.get('/getAllVender',getallVender);
VendorRouter.post('/addReservationToVender',addReservationToVender);
VendorRouter.post('/setCarNumbertovender/:venderId',setCarNumbertovender);
VendorRouter.post('/getstatusofCarTransactionforVendor/:venderId',getstatusofCarTransactionforVendor);
VendorRouter.post('/getVendorifCarPresent',getVendorifCarPresent);
VendorRouter.get('/getAllBookingIdofParticularVender/:venderID',getAllBookingIdofParticularVender)
VendorRouter.get('/getAllBookingCarOfParticularVendor/:venderId',getAllBookingCarOfParticularVendor);


module.exports = VendorRouter; // Export the router instance directly
