const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id:String,
    title:String,
    text:String,
    label:[{
        type:String
    }],
    image:String,
    imageId:String,
    color:{
        type:String,
        default:"white"
    },
    pinned:{
        type:Boolean,
        default : false
    },
    archive:{
        type:Boolean,
        default : false
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports=mongoose.model("Note",noteSchema);