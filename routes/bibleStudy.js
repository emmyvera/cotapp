const router = require("express").Router();
const BibleStudy = require("../model/bibleStudy");

//Get BibleStudy
router.get("/", async (req, res) => {
    try{
        const bibleStudyInfo = await BibleStudy.find({});
        
        res.json({
            success:true,
            BibleStudy: bibleStudyInfo,
            message: "Welcome And Stay Blessed!"

        });

    }catch(err){
        console.log(err)
    }
    
});

// Get Single BibleStudy
router.get("/:id", async(req, res) => {
    try{
        const bibleStudyInfo = await BibleStudy.findOne({_id: req.params.id})
        res.json({
            success:true,
            BibleStudy: bibleStudyInfo,
            message: "Welcome And Stay Blessed!"
        })
    }catch(err){
        console.log(err)
    }
});

// Post New BibleStudy
router.post("/", async(req, res) => {
    const { topic, bibleText, aim, introduction, discussion, personalApp, conclusion, gVerse, category, fileLink } = req.body;

    //FIXME Updating Files
    const bibleInfo = new BibleStudy({
        topic,
        bibleText,
        aim,
        introduction,
        discussion,
        personalApp,
        conclusion,
        gVerse,
        category,
        fileLink
    })

    try{
        const bibleStudySave = await bibleInfo.save();
        res.send(201);
    }catch(err){
        console.log(err)
    }
});

// Update BibleStudy
router.put("/:id", async(req, res) => {

    try{
        const bibleStudySave = await BibleStudy.findOneAndUpdate(
            {_id:req.params.id},
            req.body);
        res.send(200);
    }catch(err){
        console.log(err)
    }
});

// Delete BibleStudy
router.delete("/:id", async (req, res) => {
    try{
        const bibleStudyDel = await BibleStudy.findOneAndDelete({_id:req.params.id});
        res.send(200);
    }catch(err){
        console.log(err)
    }
})
module.exports = router;