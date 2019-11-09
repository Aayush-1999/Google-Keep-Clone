const passport              = require("passport"),
      local                 = require("./localStrategy");
      User                  = require("../../models/user"),
      expressSession        = require("express-session"),
      mongoose              = require("mongoose");

module.exports = app =>{
    app.use(expressSession({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    //LOCAL STRATEGY CONFIGURATION
    local(passport);

    passport.serializeUser((user, done)=> {
        done(null, user._id);
    });

    passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=>{
        done(err, user);   
        });
    });
};
 