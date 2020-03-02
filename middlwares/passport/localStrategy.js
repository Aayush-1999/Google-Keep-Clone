const LocalStrategy = require("passport-local"),
      bcrypt        = require("bcryptjs"),
      User          = require("../../models/user");

module.exports = passport =>{
    passport.use(new LocalStrategy(
        {
            usernameField: 'email'
        },
        (email, password, done)=> {
          User.findOne({ email },(err, user)=>{
            if (err) { return done(err); }
  
            if (!user) {
              return done(null, false, { message: 'Email not registered' });
            }
            
            bcrypt.compare(password, user.password,(err, result)=>{
              if(err) return done(err);

              if(result) return done(null, user);

              else return done(null, false, { message: 'Incorrect password.' });
            });
          }); 
        }
      )
    );
}