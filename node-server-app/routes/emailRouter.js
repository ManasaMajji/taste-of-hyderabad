var express = require('express');
var bodyParser = require('body-parser');
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');
emailRouter.route('/')
.options(cors.cors,(req,res) => {
  res.sendStatus(200);
})
.post(cors.cors, (req,res,next) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'manasamajji9876@gmail.com',
      pass: 'inlbbdhkvwqmcryr'
    }
  });
  var mailOptions = {
    from: 'manasamajji9876@gmail.com',
    to: 'toheastham@gmail.com',
    subject: 'Test mail from app',
    html: 'Testing Successful'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      res.send(error);
    } else {
      res.send('successfully sent')
    }
  });
})

module.exports = emailRouter;
