var async = require('async');

var fib = function (n) {

  console.log('Running %s iterations', n);

  var a = 0,
    b = 1,
    f = 1;

  function calculate() {
    return function (callback) {
      console.log('calculating...');
      setTimeout(function () {
        f = a + b;
        a = b;
        b = f;
        callback(a, b, f);
      }, 500);
    }
  }

  var funcs = [];
  for (var i = 2; i <= n; i++) {
    console.log('pushing');
    funcs.push(calculate());
  }

  async.series(funcs, function () {
    console.log('done f is %s', f);
  });
};

fib(99999);

exports.run = fib;

// var crypto = require('crypto')

// ;(function f() {
//   crypto.randomBytes(32, function(err, bytes) {
//     if (err) throw err
//     console.log(bytes.toString('hex'))
//     f()
//   })
// })()

// console.log(crypto.randomBytes(32).toString('hex'))
