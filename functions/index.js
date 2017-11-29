const functions = require('firebase-functions');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeZLTJVPsAuIEN4zlLEklBNPwvgbmMvT2mWvd7woirphoB78A/formResponse';

app.post('/signUpEmail', (req, res) => {
  const { email, product, comment } = req.body;
  
  const form = {
    'entry.969253353': email,
    'entry.2037215959': product,
    'entry.1479242274': comment,
  };
  console.log(form);
  return request.post(url, { form }, (err) => {
    if (err) {
      console.log(err);
      return res.send('error');
    }
    return res.send('ok');
  });
});

exports.signUpEmail = functions.https.onRequest(app);