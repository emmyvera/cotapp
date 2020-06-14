const express = require('express');
const mongoose  = require('mongoose');
const config = require("./config")
const app = express();

//Middleware 

// #Body-Phaser
app.use(express.urlencoded({limit: '50mb', extended: true}));


// Routes
const homeRoute = require("./routes/home");
app.use("/home", homeRoute);

const bibleStudyRoute = require("./routes/bibleStudy");
app.use("/bibleStudy", bibleStudyRoute);

const audioRoute = require("./routes/audio");
app.use("/audio", audioRoute);

const academyRoute = require("./routes/academy");
app.use("/academy", academyRoute);

//Starting Backend
app.listen(config.PORT, () => { 
    mongoose.connect(config.MONGODB_URI, 
        {useNewUrlParser: true}
    );
    console.log(`listening on http://localhost:${config.PORT}`)});
