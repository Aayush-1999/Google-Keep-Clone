const mongoose   = require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
        required: true
        },
    password: String,
    image: String,
    imageId: {
        type: String,
        default: null
    }
})

module.exports=mongoose.model("User",UserSchema);