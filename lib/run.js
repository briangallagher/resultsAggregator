var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var resultsManager = require('./resultsManager');

function runRoute() {
  var run = new express.Router();
  run.use(cors());
  run.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  run.get('/results', function (req, res) {

    resultsManager.getAll(function (err, data) {

      if (err) {
        console.error('Error getting results !!!!! !!!! ');
        console.error('Error getting results !!!!! !!!! ');
        console.error('Error getting results !!!!! !!!! ');
        console.error('Error getting results !!!!! !!!! ');
        console.error('Error getting results !!!!! !!!! ');
        console.error('Error getting results !!!!! !!!! ');
        console.log(JSON.stringify(err));

        res.status(500).send({
          'err': JSON.stringify(err)
        });

      } else {
        res.status(200).send(data);
      }
    })

  });

  return run;
}

module.exports = runRoute;
