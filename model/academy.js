const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const Schema = mongoose.Schema;

const AcademySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    details: {
        type: String,
        required:true,
        trim: true
    },

    level: {
        type: Number,
        required: true,
        trim:true
    },

    faculty: {
        type: String,
        required: true,
        trim: true
    },

    dept: {
        type: String,
        required: true,
        trim:true
    },

    fileType: {
        type: String,
        default: "Others",
        trim: true
    },

    fileCategory: {
        type: String,
        default: "Others",
        trim: true
    },

    fileLink: {
        type: String,
        required: true,
        trim: true
    },
})

AcademySchema.plugin(timestamp)
module.exports = mongoose.model("Academy", AcademySchema);