const nodemailer = require("nodemailer");

module.exports=(userEmail,Subject,body)=>{
const smtpTransport = nodemailer.createTransport({
    service: "Gmail", 
    auth: {
      user: process.env.GMAILID,
      pass: process.env.GMAILPW
    }
  });
  var mailOptions = {
    to: userEmail,
    from: process.env.GMAILID,
    subject: Subject ,
    text: body
  };
  smtpTransport.sendMail(mailOptions, (err)=> {
    return err;
  });
}