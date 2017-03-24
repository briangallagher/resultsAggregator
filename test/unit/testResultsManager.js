'use strict';

var proxyquire = require('proxyquire');
var assert = require('assert');
var resultsManager = require('../../lib/resultsManager');

describe('Test results manager', function () {

  it('should successfully parse and return basic memory results', function (done) {

    var resultsManager = proxyquire('../../lib/resultsManager', {
      './ResultsModel': {
        getAll: function (cb) {
          cb(null, basicMemoryData);
        }
      }
    });

    resultsManager.getAll(function (err, data) {

      console.log('back::');
      console.log(JSON.stringify(data));

      // assert.equal(data.a, 123, 'Data is wrong 1');
      // assert.equal(data.b, 'hello', 'Data is wrong 1');
      done();
    })
  });

  it('should successfully parse and return complex results', function (done) {

    var resultsManager = proxyquire('../../lib/resultsManager', {
      './ResultsModel': {
        getAll: function (cb) {
          cb(null, complexData);
        }
      }
    });

    resultsManager.getAll(function (err, data) {

      console.log('back::');
      console.log(JSON.stringify(data));

      // assert.equal(data.a, 123, 'Data is wrong 1');
      // assert.equal(data.b, 'hello', 'Data is wrong 1');
      done();
    })
  });

  // it('should return the correct average', function (done) {
  //   var res = resultsManager.getAverageOfPropertyByScaleType(basicMemoryData, 'averagePods', 'CUSTOM_SCALE_POLICY');
  //   assert.equal(res, 5, 'Data is wrong 1');
  //   done();
  // });

});

var basicMemoryData = [{
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 2,
  "successfulRequests": 2,
  "failedRequests": 0,
  "uptimePercentage": 100,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 10,
  "meanThroughputMeanBytesSecond": 10,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 10,
  "meanThroughputBytesSecond": 10,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}]

var complexData = [{
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 2,
  "successfulRequests": 2,
  "failedRequests": 0,
  "uptimePercentage": 100,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 10,
  "meanThroughputMeanBytesSecond": 10,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 10,
  "meanThroughputBytesSecond": 10,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "MEMORY_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "CPU_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "CPU_LOAD"
}, {
  "totalRequests": 2,
  "successfulRequests": 2,
  "failedRequests": 0,
  "uptimePercentage": 100,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 10,
  "meanThroughputMeanBytesSecond": 10,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 10,
  "meanThroughputBytesSecond": 10,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "CPU_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "CPU_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "IO_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "CUSTOM_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "IO_LOAD"
}, {
  "totalRequests": 2,
  "successfulRequests": 2,
  "failedRequests": 0,
  "uptimePercentage": 100,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 10,
  "meanThroughputMeanBytesSecond": 10,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 10,
  "meanThroughputBytesSecond": 10,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "IO_LOAD"
}, {
  "totalRequests": 10,
  "successfulRequests": 8,
  "failedRequests": 2,
  "uptimePercentage": 80,
  "durationSeconds": 250,
  "httpConnections": 5,
  "httpPipelining": 5,
  "meanLatencyMeaninMS": 50,
  "meanThroughputMeanBytesSecond": 20,
  "meanRequestsSecond": 2,
  "meanLatencyinMS": 100,
  "meanThroughputBytesSecond": 100,
  "mode": "HPA_SCALE_POLICY",
  "runId": 1,
  "averagePods": "5",
  "type": "IO_LOAD"
}]
