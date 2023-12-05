

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { dbConnection } = require('./db.controller.js'); // Assuming dbConnection is exported from 'db.controller.js'
const router = require('./routes.js');
const cookieParser = require('cookie-parser');
const BlogRouter = require('./Routes/Blogs.js');
const OperatorRoute = require('./Routes/Operator.js');
const ProfileRouter = require('./Routes/Profile.js');
const VendorRouter = require('./Routes/Vendor.js');
const MarketingRoute = require('./Routes/Marketing.js');
const AuthRouter = require('./Routes/Auth.js');

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:3001'],
  credentials: true,
};

// const corsOptions = {
//   origin: '*',
//   credentials: true,
// };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = 5000;

// app.use('/0auth', router); // Assuming you want to use '/oauth' instead of '/0auth'

app.use('/0auth/Blog',BlogRouter);
app.use('/0auth/operator',OperatorRoute)
app.use('/0auth/profile',ProfileRouter);
app.use('/0auth/vendor',VendorRouter);
app.use('/0auth/Marketing',MarketingRoute);
app.use('/0auth/Auth',AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection(process.env.MONGO_DB_URI);
});
