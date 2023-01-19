const express = require('express');
const cors = require('cors');
const app = express();

const whiteList = ['http://localhost:4200'];

var corsOptionDelegate = (req, callback) => {
  var corsOption;
  if (whiteList.indexOf(req.header('Origin')) != -1) {
    corsOption = {origin: true}
  } else {
    corsOption = {origin: true}
  }
  return callback(null,corsOption);
}

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionDelegate);
