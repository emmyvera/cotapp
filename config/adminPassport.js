const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Load AdminModel
const AdminUser = require("../model/admin") 


module.exports = function(passport){

    passport.use(new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
        // Match AdminUser
        AdminUser.findOne({username: username})
        .then(user => {
            if(!user){
                return done(null, false, {message: "Authentication Failed"});
            }

            //Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;

                if(isMatch){
                    return done(null, user)
                } else {
                    return done(null, false, { message: "Authentication Failed" });
                }
            });
        })
        .catch(err => console.log(err));
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
       
      passport.deserializeUser((id, done) => {
        AdminUser.findById(id,  (err, user) => {
          done(err, user);
        });
      });

}
