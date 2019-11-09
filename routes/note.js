const express        = require("express"),
      router         = express.Router(),
      Blog           = require("../models/blog"),
      methodOverride = require("method-override"),
      middleware     = require("../middleware/verify"),
      {cloudinary,upload} = require("../utils/cloudinary");

//SHOW FORM FOR CREATING NEW BLOG
router.get("/create",middleware.isLoggedIn,(req,res)=>{
    res.render("blog/create");
});

//CREATING NEW BLOG
router.post("/" ,middleware.isLoggedIn,upload.single('image'),async function(req,res){
    try{
        let result= await cloudinary.uploader.upload(req.file.path)// can also add webpurifier to purify images uploaded on server (for more details see cloudinary addons)
        // add cloudinary url for the image to the campground object under image property
        req.body.blog.image = result.secure_url;
        // add image's public url to the campground object for identifying and deleting image on the cloudinary
        req.body.blog.imageId = result.public_id;
        // add author to campground
        req.body.blog.author = req.user._id
        let blog=await Blog.create(req.body.blog);
        //redirect back to blogs page
        res.redirect("/blog/"+blog.id);
    } catch(err) {
        req.flash('error', err.message);
        res.redirect('back');
    }
});

//SHOW EITHER ALL BLOGS ON INDEX PAGE OR ON THE BASIS OF SEARCH RESULTS
router.get("/",async function(req,res){
    let noMatch=null;
    try{
        if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        blogs= await Blog.find({title:regex})
            if(foundBlog.length<1){
                noMatch="No Blogs found. Please try again.";
            }
            res.render("index",{blogs,noMatch});
        } 
        else{
            blogs = await Blog.find().sort("-_id").exec();
            res.render("index",{blogs,noMatch});
        }
    }
    catch(err){
        res.redirect("back");
    }
})

//SHOW SINGLE BLOG
router.get("/:id",(req,res)=>{
    Blog.findById(req.params.id).
        populate({
            path:"comments",
            model:"Comment",
            populate:{
                path:"author",
                model:"User"
            }
        }).
        populate("author").
        exec((err,blog)=>{
        if(err || !blog) {
            req.flash("error","Blog not found");
            res.redirect("back");
        }
        else {
            res.render("blog/show",{blog});
        }
    });
})

//SHOW FORM FOR UPDATING A BLOG
router.get("/:id/edit",middleware.checkBlogOwnership,(req,res)=>{
    Blog.findById(req.params.id,(err,blog)=>{
        res.render("blog/edit",{blog});
    });
})

//UPDATE BLOG
router.put("/:id",middleware.checkBlogOwnership,upload.single('image'),(req,res)=>{
    Blog.findById(req.params.id,async function(err,blog){
        if(err){
            res.redirect("back");
        }
        else{
            if(req.file){
                try{
                    await cloudinary.uploader.destroy(blog.imageId);               
                    let result=await cloudinary.uploader.upload(req.file.path);
                    blog.image=result.secure_url;
                    blog.imageId=result.public_id;
                }
                catch(err){
                    res.redirect("/blog/"+ req.params.id + "/edit");
                }
            }    
            blog.title=req.body.title;
            blog.body=req.body.body;
            blog.save();
            res.redirect("/blog/" + req.params.id);
        }
    });
})

//DELETE A BLOG
router.delete("/:id",middleware.checkBlogOwnership,(req,res)=>{
    Blog.findById(req.params.id,async function(err,blog){
        try{
           await cloudinary.uploader.destroy(blog.imageId); 
           blog.remove();
           res.redirect("/blog");
        }
        catch(err){
           return res.redirect("back");  
        }
     });
})

//FUNCTION FOR ESCAPING SEARCH PARAMETER
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports=router;