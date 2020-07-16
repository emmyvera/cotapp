const router = require("express").Router();
const Academy = require("../model/academy");
const { ensureAuthenticated } = require("../config/auth");


// Get Academy
router.get("/", ensureAuthenticated, async (req, res) => {

    try{
        const academyInfo = await Academy.find({})
        res.json({
            success:true,
            Academy: academyInfo,
            message: "Welcome And Stay Blessed!"
        });
    }catch(err){
        console.log(err);
    }
})

//TODO Get Single Academy
router.get("/:id", ensureAuthenticated, async (req, res) => {
    try{
        const academyInfo = await Academy.findOne({_id: req.params.id});
        res.json({
            success:true,
            Academy: academyInfo,
            message: "Welcome And Stay Blessed!"
        })
    }catch(err){
        console.log(err)
    }
});

//TODO Post Academy
router.post("/", ensureAuthenticated, async (req, res) => {
    const { title, details, level, faculty, dept, fileType, fileCategory, fileLink } = req.body;

    const academyDetails = new Academy({
        title,
        details,
        level,
        faculty,
        dept,
        fileType,
        fileCategory,
        fileLink
    });

    try{
        const academySave = await academyDetails.save();
        res.send(201)
    }catch(err){
        console.log(err)
    }
});

//TODO Update Academy 
router.put("/:id", ensureAuthenticated, async (req, res) => {
    
    try{
        const academySave = await Academy.findOneAndUpdate({_id:req.params.id},
            req.body);
        res.send(200)
    }catch(err){
        console.log(err)
    }
});

//TODO Delete Academy
router.delete("/:id", ensureAuthenticated, async(req, res) => {
    try{
        const academyDel = await Academy.findOneAndDelete({_id: req.params.id})
        res.send(200)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;