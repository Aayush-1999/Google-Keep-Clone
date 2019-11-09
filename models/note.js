const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id:String,
    text:String,
    pinned:{
        type:Boolean,
        default : false
    }
})

module.exports=mongoose.model("Note",noteSchema);