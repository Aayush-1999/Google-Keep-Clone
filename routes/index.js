const express      = require("express"),
      router       = express.Router(),
      bcrypt       = require("bcryptjs"),
      passport     = require("passport"),
      User         = require("../models/user");

//REGISTER ROUTE
router.post("/register",async function(req,res){
    try{
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        let user = await User.create({
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            displayName:req.body.firstname + " " + req.body.lastname,
            email:req.body.email,
            password:hash,
            image:"https://res.cloudinary.com/image-storage/image/upload/v1572009434/blank-avatar_opbhgx.png"
        });
        res.status(200).send(user);
    }
    catch(err){
        res.status(400).send("registeration unsuccessful");
    }    
});

//LOGIN ROUTE - CHECK EMAIL 
router.post("/login/checkEmail",async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(user!=null) res.status(200).send("user email found")
        else res.status(404).send("email not found");
    }
    catch(err){
        res.status(204).send(err);
    }
})

//LOGIN ROUTE- VERIFY PASSWORD
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