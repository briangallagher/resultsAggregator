var dal = require('./dal.js');
var collection = 'LoadTestResults';
var noop = function () {};

exports.create = function (fields, cb) {
  cb = cb || noop;
  console.log('Creating Stats Results');
  dal.create(collection, fields, cb);
};

var list = function (restrictions, cb) {
  dal.list(collection, restrictions, cb);
};

exports.removeAll = function (cb) {
  cb = cb || noop;
  dal.removeAll(collection, cb);
}

exports.getAll = function (cb) {
  var result = [];
  console.log('Getting all load test results from the DB');
  list({}, function (err, data) {
    if (err) {
      console.log('Error retrieving load test results from DB %s', err);
      cb(err);
    } else {
      for (var i = 0; i < data.list.length; i++) {
        result.push(data.list[i].fields);
      }
      console.log('Returning with load test results from the DB');
      cb(null, result);
    }
  })
}
