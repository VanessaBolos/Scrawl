//Dependencies
require('dotenv').config(); //storing sensitive information like database URIs and API keys
const express = require('express'); //A web framework for Node.js.
const expressLayouts = require('express-ejs-layouts'); //Middleware for EJS layout templates.
const methodOverride = require("method-override"); // Allows overriding HTTP methods, useful for RESTful routes.
const connectDB = require('./server/config/db'); //A custom function to connect to MongoDB.
const session = require('express-session'); //Middleware for handling sessions.
const passport = require('passport'); //Middleware for authentication.
const flash = require('connect-flash'); //Provides flash messages (temporary messages, like notifications).
const MongoStore = require('connect-mongo'); //MongoDB session store for express-session
const passportConfig = require('./server/config/passportConfig'); //A custom module to configure Passport.js (not shown but usually involves strategies and serialization).

//App Setup
const app = express();
const port = 5000 || process.env.PORT;

//Session Management
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  })
}));

//Passport Configuration
app.use(passport.initialize());
app.use(passport.session());

//Middleware Setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
connectDB();  

//Static Files and Flash Messages
app.use(express.static('public'));
app.use(flash());

//View engine and layouts
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

//Catches all undefined routes and renders a 404 error page.
app.get('*', function(req, res) {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
