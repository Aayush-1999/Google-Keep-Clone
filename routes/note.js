const express        = require("express"),
      router         = express.Router(),
      Note           = require("../models/note"),
      methodOverride = require("method-override"),
    //   middleware     = require("../middlwares/verify"),
      {cloudinary,upload} = require("../utils/cloudinary");

    //   middleware.isLoggedIn

//CREATING NEW BLOG
router.post("/" ,upload.single('image'), async function(req,res){
    console.log("reached");
    try{
        if(req.file){
            let result= await cloudinary.uploader.upload(req.file.path)
            req.body.note.image = result.secure_url;
            req.body.note.imageId = result.public_id;
        }
        // req.body.note.author = req.user._id
        let note=await Note.create(req.body.note);
        console.log(note);
        res.redirect("/");
    } catch(err) {
        console.log(err);
        // req.flash('error', err.message);
        // res.redirect('back');
    }
});

router.get("/",async (req,res)=>{
    try{
        notes = await Note.find().sort("-_id").exec();
        res.render("home",{notes});
    }
    catch{
        res.redirect('back');
    }
})

//UPDATE NOTE
router.put("/:id",upload.single('image'),(req,res)=>{
    console.log("reach put");
    Note.findById(req.params.id,async (err,note)=>{
        if(err){
            console.log(err);
            res.redirect("back");
        }
        else{
            if(req.file){
                try{
                    await cloudinary.uploader.destroy(note.imageId);               
                    let result=await cloudinary.uploader.upload(req.file.path);
                    note.image=result.secure_url;
                    note.imageId=result.public_id;
                }
                catch(err){
                    res.redirect("/note");
                }
            }
            note.pinned=req.body.pin;
            note.archive=req.body.archive;
            note.label.push(req.body.label);
            note.color = req.body.color;    
            note.save();
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