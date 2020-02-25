const express               = require("express"),
      app                   = express(),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      methodOverride        = require("method-override");
      middleware            = require("./middlwares/index");

require("dotenv").config();

//ROUTES
const indexRoute         = require("./routes/index"),
      noteRoute          = require("./routes/note"),
      resetPasswordRoute = require("./routes/resetpass");

mongoose.connect(process.env.DATABASEURL,{ useUnifiedTopology: true ,useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));

middleware(app);

app.use("/",indexRoute);
app.use("/",resetPasswordRoute);
app.use("/note",noteRoute);

app.listen(process.env.PORT||5000)
{
    console.log("Server has started");
}