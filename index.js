const express = require('express');
const mongoose  = require('mongoose');
const config = require("./config")
const app = express();

//Middleware 

// #Body-Phaser
app.use(express.urlencoded({limit: '50mb', extended: true}));



// Routes
const homeRoute = require("./routes/home")
app.use("/home", homeRoute);

app.listen(config.PORT, () => { 
    mongoose.connect(config.MONGODB_URI, 
        {useNewUrlParser: true}
    );
    console.log(`listening on http://localhost:${config.PORT}`)});
