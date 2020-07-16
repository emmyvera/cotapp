const express = require('express');
const mongoose  = require('mongoose');
const config = require("./config")
const session = require("express-session");
const passport = require("passport");
const app = express();

//Middleware
// Passport config
require("./config/adminPassport")(passport);

// #Body-Phaser
app.use(express.urlencoded({limit: '50mb', extended: true}));


//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));
  
  // Password Middleware
  app.use(passport.initialize());
  app.use(passport.session());


// Routes
const homeRoute = require("./routes/home");
app.use("/home", homeRoute);

const bibleStudyRoute = require("./routes/bibleStudy");
app.use("/bibleStudy", bibleStudyRoute);

const audioRoute = require("./routes/audio");
app.use("/audio", audioRoute);

const academyRoute = require("./routes/academy");
app.use("/academy", academyRoute);

const adminRoute = require("./routes/admin/account");
app.use("/admin", adminRoute);

//Starting Backend
app.listen(config.PORT, () => { 
    mongoose.connect(config.MONGODB_URI, 
        {useNewUrlParser: true}
    );
    console.log(`listening on http://localhost:${config.PORT}`)});
