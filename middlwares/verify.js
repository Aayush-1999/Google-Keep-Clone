const Blog     = require("../models/blog"),
      Comment  = require("../models/comment");
let middlewareObj={};

middlewareObj.checkBlogOwnership=(req,res,next)=>{
    if(req.isAuthenticated()){
       Blog.findById(req.params.id,(err,blog)=>{
          if(err || !blog){
             req.flash("error","Campground not found");
             res.redirect("back");
          }
          else{
             if(blog.author._id.equals(req.user._id) || req.user.isAdmin){
                next();
             }
             else
             {
               req.flash("error","You don't have permission to do this");
               res.redirect("back");
             }
          }
       });
    }
    else
    {
      req.flash("error","You don't have permission to do this");
      res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership=(req,res,next)=>{
   if(req.isAuthenticated()){
       Comment.findById(req.params.comment_id,(err,comment)=>{
          if(err || !comment){
             req.flash("error","Comment not found");
             res.redirect("back");
          }
          else{
             if(comment.author._id.equals(req.user._id) || req.user.isAdmin){
                next();
             }
             else
             {
               req.flash("error","You don't have permission to do that");
               res.redirect("back");
             }
          }
       });
   }
   else
       res.redirect("back");
 }

 middlewareObj.isLoggedIn=function (req,res,next){
    if(req.isAuthenticated())
    {
       return next();
    }
    req.flash("error","Please login first");
    res.redirect("/login");
 }

 module.exports=middlewareObj;