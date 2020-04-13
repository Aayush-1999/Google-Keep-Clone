const  jwt  = require("jsonwebtoken");
let authorizeMiddleware={};

authorizeMiddleware.auth=(req,res,next)=>{
    const token=req.header('x-auth-token')
    if(!token) res.status.json({msg:'authorization failed'})
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decoded
        next()
    }
    catch(err){
        res.status.json({msg:'Token invalid'})
    }
}

module.exports=authorizeMiddleware