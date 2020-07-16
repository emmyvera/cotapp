const router = require("express").Router();
const Audio = require("../model/audio");
const { ensureAuthenticated } = require("../config/auth");


// Get Audio
router.get("/", ensureAuthenticated, async (req, res) => {

    try{
        const audioInfo = await Audio.find({});
        
        res.json({
            success:true,
            Audio: audioInfo,
            message: "Welcome And Stay Blessed!"
        });
    }catch(err){
        console.log(err);
    }
});

// Get Single Audio
router.get("/:id", ensureAuthenticated, async (req, res) => {
    
    try{
        const audioInfo = await Audio.findOne({_id:req.params.id})

        res.json({
            success:true,
            Audio: audioInfo,
            message: "Welcome And Stay Blessed!"
        });

    }catch(err){
        console.log(err)
    }
}) 

// Post Audio
router.post("/", ensureAuthenticated, async (req, res) => {

    const{ title, author, image, shortDescription, fileLink } = req.body;

    const audioDetail = new Audio({
        title,
        author,
        image,
        shortDescription,
        fileLink
    });

    try{
        const audioSave = await audioDetail.save();
        res.send(201)
    }catch(err){
        console.log(err);
    }
}); 

// Update Audio 
router.put("/:id", ensureAuthenticated, async (req, res) => {

    try{
        const audioSave = await Audio.findOneAndUpdate({_id:req.params.id},
            req.body);
        res.send(200)
    }catch(err){
        console.log(err);
    }
}); 

// Delete Audio
router.delete("/:id", ensureAuthenticated, async (req, res) => {
    try{
        const audioDel = await Audio.findOneAndDelete({_id:req.params.id})
        res.send(200)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;