const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type:String,
        required: true,
        trim: true
    }
    
});

AuthorSchema.plugin(timestamp)
module.exports = mongoose.model("Author", AuthorSchema)