const express       = require("express");
      path          = require("path"),
      compression   = require("compression");

module.exports = app => {

    app.use(compression({ filter: shouldCompress }))
 
    function shouldCompress (req, res) {
        if (req.headers['x-no-compression']) {
            // don't compress responses with this request header
            return false
        }   
        // fallback to standard filter function
        return compression.filter(req, res)
    }
    
    app.use(express.static(path.join(__dirname,"../public")));
    app.use(express.static(path.join(__dirname,"../node_modules/materialize-css/dist")));
    app.use(express.static(path.join(__dirname,"../node_modules/animate.css")));

};
    