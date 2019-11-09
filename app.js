const express               = require("express"),
      app                   = express(),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      methodOverride        = require("method-override");
      middleware            = require("./middlwares/index");

require("dotenv").config();

//ROUTES
const indexRoute         = require("./routes/index"),
    //   noteRoute          = require("./routes/note"),
      resetPasswordRoute = require("./routes/resetpass");
    //   notificationRoute  = require("./routes/notification");

mongoose.connect("mongodb://127.0.0.1/fliprHackathon",{ useUnifiedTopology: true ,useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));

middleware(app);

app.use("/",indexRoute);
app.use("/",resetPasswordRoute);
// app.use("/note",blogRoute);
// app.use("/notification",notificationRoute);

app.listen(process.env.PORT||3000)
{
    console.log("Server has started");
}