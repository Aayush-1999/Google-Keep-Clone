const express        = require("express"),
      router         = express.Router(),
      Note           = require("../models/note"),
      {cloudinary,upload} = require("../utils/cloudinary");


//CREATING NEW BLOG
router.post("/" ,upload.single('image'), async function(req,res){
    try{
        if(req.file){
            let result= await cloudinary.uploader.upload(req.file.path)
            req.body.note.image = result.secure_url;
            req.body.note.imageId = result.public_id;
        }
        req.body.note.author = req.user._id
        let note=await Note.create(req.body.note);
        note.save();
        console.log(note);
        res.redirect("/");
    } catch(err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('back');
    }
});

router.get("/",async (req,res)=>{
    if(req.isAuthenticated()){
        try {
            let notes= await Note.find().where("author").equals(req.user._id).sort("-_id").exec();
            res.render("home",{notes});
          } 
          catch(err) {
            return res.redirect("back");
          }
    }
    else{
        res.render("login");
    }
})

//UPDATE NOTE
router.put("/:id",upload.single('image'),(req,res)=>{
    console.log("reach put");
    Note.findById(req.params.id,async (err,note)=>{
        try{
            if(req.file){
                await cloudinary.uploader.destroy(note.imageId);               
                let result=await cloudinary.uploader.upload(req.file.path);
                note.image=result.secure_url;
                note.imageId=result.public_id;
            }
            note.pinned=req.body.pin;
            note.archive=req.body.archive;
            note.label=req.body.label;
            note.color = req.body.color;
            console.log(note);    
            note.save();
            res.redirect("/note");
        }
        catch(err){
            console.log(err);
            res.redirect("/note");
        }
    });
})

//DELETE A NOTE
router.delete("/:id",(req,res)=>{
    Note.findById(req.params.id,async function(err,note){
        try{
            if(note.imageId){
                await cloudinary.uploader.destroy(note.imageId); 
            }
           note.remove();
           res.redirect("/note");
        }
        catch(err){
           return res.redirect("back");  
        }
     });
})


module.exports=router;