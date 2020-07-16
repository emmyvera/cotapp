const router = require("express").Router();
const Home = require("../model/home");
const { ensureAuthenticated } = require("../config/auth");
//Get Home Route
router.get("/", async (req, res) => {

    try{
        const homeInfo = await Home.find({});
        res.json({
            success: true,
            Home: homeInfo,
            message: "Welcome And Stay Blessed!"
        });
    }catch(err){
        console.log(err);
    }
});

//Get Single Home Route
router.get("/:id", async (req, res) => {
    try{
        
        const homeInfo = await Home.findById(req.params.id, (err) => {
            if(err){
                res.json({
                    message:"File not found"
                }).status(404)  
            }         
        })

        res.json({
            success: true,
            Home: homeInfo,
            message: "Welcome And Stay Blessed!"
        });
    }catch(err){
        console.log(err);
    }
});

// Post Home Route
//FIXME Uploading Files
router.post("/", ensureAuthenticated, async(req, res) => {
   
    const { title, details, pic, author } = req.body;

    const home = new Home({
        title,
        details,
        pic,
        author
    });

    try{
        const homeSave = await home.save()
        res.send(201)
    }catch(err){
        //TODO HAndle 404 errors
        console.log(err)
    }
});

//Put Home Route
router.put("/:id", ensureAuthenticated, async(req, res) => {
   
    try{
        const homeSave = await Home.findOneAndUpdate(
            {_id:req.params.id}, 
            req.body
        );
        res.send(200)
    }catch(err){
        //TODO HAndle 404 errors
        console.log(err)
    }
});

// Delete Home Route
router.delete("/:id", ensureAuthenticated, async (req, res) => {
    try{
        const homeDel = await Home.findOneAndDelete(
            {_id:req.params.id});
        res.send(200)
    }catch(err){
        console.log(err)
    }
})

module.exports = router