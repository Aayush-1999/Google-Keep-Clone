const express      = require("express"),
      router       = express.Router(),
      passport     = require("passport"),
      User         = require("../models/user");

//REGISTER LOGIC ROUTE
// router.post("/register",async function(req,res){
//     try{
//         let saltRounds=10,hashcode;    
//         hashcode = await bcrypt.hash(req.body.password, saltRounds)
//         let user = await User.create({
//             firstName:req.body.firstname,
//             lastName:req.body.lastname,
//             displayName:req.body.firstname + " " + req.body.lastname,
//             email:req.body.email,
//             password:hashcode,
//             image:"https://res.cloudinary.com/image-storage/image/upload/v1572009434/blank-avatar_opbhgx.png"
//         }); 
//         req.logIn(user,function(err){  
//             res.redirect("/");
//         });                   
//     }
//     catch(err){
//         req.flash("error","This Email is already registered");
//         res.redirect("/register");
//     }    
// });


//LOCAL LOGIN LOGIC ROUTE
// router.post("/login",passport.authenticate("local",{ 
//         failureRedirect:"/login",
//         failureFlash:"Invalid email or password"
//     }),(req,res)=>{
//         res.redirect("/");
// });
 
router.post("/login/checkEmail",async(req,res)=>{
    try{
        let user = await User.find({email:req.body.email})
        if(user!=null) res.status(200).send("user email found")
        else res.status(404).send("email not found");
    }
    catch(err){
        res.status(204).send(err);
    }
})

//add password matching code
router.post("/login/checkPwd",passport.authenticate("local"),(req, res) => {
    let userInfo = req.user;
    res.send(userInfo);
});

//LOGOUT ROUTE
router.get("/logout",(req,res)=>{
    req.logOut();
    res.status(200).send("logout uccessful");
});

module.exports=router;