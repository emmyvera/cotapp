const router = require("express").Router()
const Admin = require("../../model/admin")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const { ensureAuthenticated } = require("../../config/auth");

//Get all admin
router.get("/", ensureAuthenticated, async(req, res) => {
    try{
        const admin = await Admin.find({}, (err) => {
            if(err){
                res.json({
                    message: "File Not Found"
                })
            }
        })
        res.json({
            message: "Success",
            admin:admin
        })
    }catch(err){
        console.log(err)
    }
})

//Create an Admin
router.post("/", ensureAuthenticated, async(req, res) => {
    try{
        const { username, email, password } = req.body;
        emailCheck = await Admin.findOne({email:email})
        usernameCheck = await Admin.findOne({username:username})

        if(emailCheck || usernameCheck ){
            res.json({
                message: "User Already Exist"
            })
            
        }else{
            const newAdmin = new Admin({
                username,
                email,
                password
            });
            //Hash Password 
            bcrypt.genSalt(10, (err, salt) => 
                bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                    if(err) throw err;
                    //Set password to hashed
                    newAdmin.password = hash;
                    // Save Users                
                    newAdmin.save()
                    .then(user => {
                        res.json({
                            message : "Success",
                            admin: newAdmin
                        })
                    })
                    .catch(err => console.log(err));

                }));
        }
    } catch(err){
        console.log(err)
    }
})

// Delete Admin Account
router.delete("/:id", ensureAuthenticated, async(req, res) => {
    try{
        const delAdmin = await Admin.findOneAndRemove({_id:req.params.id}, (err)=> {
            if (err) {
                res.json({
                    message:"File Not Found"
                })    
            }
        })

        res.json({
            message: "Success"
        })
    }catch(err){

    }
})

// Login Handle
router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
    
    },)(req, res, next)

});

router.get("/logout", (req, res) => {
    req.logout()
    res.json({
        message: "Successfully Logout"
    })
});


// To Delete All File
// router.delete("/all", ensureAuthenticated, async(req,res) => {
//     try{
//         const delAllAdmin = await Admin.deleteMany({}, (err)=> {
//             if (err) {
//                 res.json({
//                     message:err,
//                     message1:"It didnt work Bro!"
//                 })    
//             }
            
//         })
//         res.json({
//             message:"Succuess"
//         })
//     }catch(err){

//     }
// })


module.exports = router