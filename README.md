# Google Keep Clone

<a><img alt="Code Quality" src="https://img.shields.io/badge/code%20quality-A-brightgreen"></a>
<a><img alt="Dependanices upto date" src="https://img.shields.io/david/Aayush-1999/Blogrite?label=dependencies"></a>
<!-- <a><img alt="GNU-v3" src="https://img.shields.io/badge/License-GPLv3-blue.svg"></a> -->
<a><img alt="Code Size" src="https://img.shields.io/badge/code%20size-110%20kB-orange"></a>
<a><img alt="Website Up" src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"></a>

This is a **Google Keep Clone**.

### SERVER

The Server is made on `Node.js (v10.15.3)`
<br/>
`Express.js` is used as the server framework (v4.17.1)

### DATABASE

The database used is `MongoDB` and is hosted on a `MongoDB Atlas Cluster`.
<br/>
`Mongoose.js` is used as an ODM (v5.6.11)

### FRONT-END

- The Front-end is made with `HTML, CSS and JS`.
- `Materialize.css` is used for better styling of the project.

### SECURITY

Many security precautions have been taken:
- ***bcrypt***: For secure password saving in the database.

### AUTHENTICATION

`Passport.js` has been integrated into the application for Secure Authentication of User Credentials over OAuth 2.0 for Local Email Verification.

### MISC

`nodemailer` has been used for sending emails (Reset Password Link) to the users.
<br/>
`multer` has been used for uploading images and `cloudinary` for storing images.


### NPM Commands
- **npm install** - installs all the dependencies
- **npm start** - lints the server and client script, starts eslint on watch mode on server scripts and starts the project at localhost:1998 in debug mode.
- **npm run start-w** - Restarts the server(using nodemon) on every save and lints the server and client side scripts on each save.
- **Use npm run** --silent <your-script> to hide the internal logs from your terminal window.


### To-Do

- Use cookies securely
- Add proper Logging (Bunyan or Winston)
- Use CORS according to your project.