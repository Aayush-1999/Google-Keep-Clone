const express               = require("express"),
      app                   = express(),
      cors                  = require("cors"),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose"),
      methodOverride        = require("method-override");
      middleware            = require("./middlwares/index");

require("dotenv").config();

//ROUTES
const indexRoute         = require("./routes/index"),
      noteRoute          = require("./routes/note");

mongoose.connect(process.env.DATABASEURL,{ useUnifiedTopology: true ,useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

middleware(app);

app.use("/",indexRoute);
// app.use("/note",noteRoute);

app.listen(5000)
{
    console.log("Server has started");
}