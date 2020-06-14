const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;

const AudioSchema = new Schema({
    
    title: {
        type: String,
        required: true,
        trim: true
    },

    author: {
        type: String,
        required: true,
        trim: true
    },
    
    image: {
        type: String,
        default: "cotlogo.jpg",
        trim: true
    },

    shortDescription: {
        type:String,
        required: true,
        trim: true
    },

    fileLink: {
        type: String,
        default: "None",
        trim: true
    },
});

AudioSchema.plugin(timestamp);
module.exports = mongoose.model("Audio",AudioSchema);
