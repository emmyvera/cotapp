const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const Schema = mongoose.Schema;

const BibleStudySchema = new Schema({
    
    topic: {
        type: String,
        required: true,
        trim: true
    },
    
    bibleText:{
        type: String,
        required: true,
        trim: true
    },

    aim: {
        type: String,
        required: true,
        trim: true
    },

    introduction: {
        type: String,
        required: true,
        trim: true
    },
    
    discussion: {
        type: String,
        required: true,
        trim: true
    },
    
    personalApp: {
        type: String,
        default: "Start Applying What You've Learnt today",
        trim: true
    },
    
    conclusion:  {
        type: String,
        required: true,
        trim: true
    },
    
    gVerse: {
        type: String,
        required: true,
        trim: true
    },
    
    category: {
        type: String,
        required: true,
        trim: true
    },
    
    fileLink: {
        type: String,
        default: "None",
        trim: true
    },

});

BibleStudySchema.plugin(timestamp)
module.exports = mongoose.model("BibleStudy", BibleStudySchema);