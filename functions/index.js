const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const { email, product } = req.body;
  
  const form = {
    'entry.969253353': email,
    'entry.2037215959': product,
  };
  return request.post('https://docs.google.com/forms/d/e/1FAIpQLSeZLTJVPsAuIEN4zlLEklBNPwvgbmMvT2mWvd7woirphoB78A/formResponse', { form })
  .then((res) => {
    res.send('ok');
  })
  .catch((e) => {
    console.log(e);
    res.send('error');
  });
});

exports.signUpEmail = app;