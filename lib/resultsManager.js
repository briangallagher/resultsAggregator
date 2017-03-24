var resultsModel = require('./ResultsModel');
var _ = require('underscore');
var uuidV1 = require('uuid/v1');

var getAverageOfPropertyByScaleType = exports.getAverageOfPropertyByScaleType = function (data, property, scaleType) {

  if (data.length === 0) {
    return 0;
  }

  function correctScaleType(item) {
    return item.mode === scaleType;
  }

  function getTotal(memo, num) {
    return Number(memo) + Number(num);
  }

  var totalPods = _.chain(data)
    .filter(correctScaleType)
    .pluck(property)
    .reduce(getTotal, 0)
    .value();

  // console.log('total pods ' + totalPods);

  // getAverage
  return totalPods / (data.length / 2); // divide by 2 because half the runs are HPA
}

function getPodUsageChartData(data, type) {

  var desc = 'Based on ' + data.length + ' Test Runs per policy';

  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', desc, ],
      ['Kubernetes AutoScale', getAverageOfPropertyByScaleType(data, 'averagePods', 'HPA_SCALE_POLICY')],
      ['Policy Based Scale', getAverageOfPropertyByScaleType(data, 'averagePods', 'CUSTOM_SCALE_POLICY')]
    ],
    chartOptions: {
      title: 'Mean Number of Pods Used. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Number of Pods (Resource Cost)',
        minValue: 0
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }

}

function getTotalRequestsChartData(data, type) {
  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', 'Total Requests Sent', 'Successful Requests', 'Failed Requests'],
      ['Kubernetes AutoScale',
        getAverageOfPropertyByScaleType(data, 'totalRequests', 'HPA_SCALE_POLICY'),
        getAverageOfPropertyByScaleType(data, 'successfulRequests', 'HPA_SCALE_POLICY'),
        getAverageOfPropertyByScaleType(data, 'failedRequests', 'HPA_SCALE_POLICY')
      ],
      ['Policy Based Scale',
        getAverageOfPropertyByScaleType(data, 'totalRequests', 'CUSTOM_SCALE_POLICY'),
        getAverageOfPropertyByScaleType(data, 'successfulRequests', 'CUSTOM_SCALE_POLICY'),
        getAverageOfPropertyByScaleType(data, 'failedRequests', 'CUSTOM_SCALE_POLICY')
      ],
    ],
    chartOptions: {
      title: 'Mean Requests. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Number of Requests',
        minValue: 0
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }

}

function getUptimeChartData(data, type) {
  var desc = 'Based on ' + data.length + ' Test Runs per policy';

  var customTotal = getAverageOfPropertyByScaleType(data, 'totalRequests', 'CUSTOM_SCALE_POLICY');
  var customSuccessful = getAverageOfPropertyByScaleType(data, 'successfulRequests', 'CUSTOM_SCALE_POLICY');
  var customPercent = Math.floor((customSuccessful / customTotal) * 100);

  var hpaTotal = getAverageOfPropertyByScaleType(data, 'totalRequests', 'HPA_SCALE_POLICY');
  var hpaSuccessful = getAverageOfPropertyByScaleType(data, 'successfulRequests', 'HPA_SCALE_POLICY');
  var hpaPercent = Math.floor((hpaSuccessful / hpaTotal) * 100);

  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', desc, ],
      ['Kubernetes AutoScale', hpaPercent],
      ['Policy Based Scale', customPercent]
    ],
    chartOptions: {
      title: 'Mean Percentage Uptime. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Percentage Uptime',
        minValue: 0,
        maxValue: 100,
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }
}

function getLatencyChartData(data, type) {

  var desc = 'Based on ' + data.length + ' Test Runs per policy';

  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', desc, ],
      ['Kubernetes AutoScale', getAverageOfPropertyByScaleType(data, 'meanLatencyMeaninMS', 'HPA_SCALE_POLICY')],
      ['Policy Based Scale', getAverageOfPropertyByScaleType(data, 'meanLatencyMeaninMS', 'CUSTOM_SCALE_POLICY')]
    ],
    chartOptions: {
      title: 'Mean Latency in milliseconds. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Request latency in milliseconds',
        minValue: 0
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }
}

function getThroughputChartData(data, type) {
  var desc = 'Based on ' + data.length + ' Test Runs per policy';

  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', desc, ],
      ['Kubernetes AutoScale', getAverageOfPropertyByScaleType(data, 'meanThroughputMeanBytesSecond', 'HPA_SCALE_POLICY')],
      ['Policy Based Scale', getAverageOfPropertyByScaleType(data, 'meanThroughputMeanBytesSecond', 'CUSTOM_SCALE_POLICY')]
    ],
    chartOptions: {
      title: 'Mean Throughput in Bytes/Second. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Throughput in Bytes/Second',
        minValue: 0
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }
}

function getReqSecsChartData(data, type) {
  var desc = 'Based on ' + data.length + ' Test Runs per policy';

  return {
    id: uuidV1(),
    chartData: [
      ['Scale Policy', desc, ],
      ['Kubernetes AutoScale', getAverageOfPropertyByScaleType(data, 'meanRequestsSecond', 'HPA_SCALE_POLICY')],
      ['Policy Based Scale', getAverageOfPropertyByScaleType(data, 'meanRequestsSecond', 'CUSTOM_SCALE_POLICY')]
    ],
    chartOptions: {
      title: 'Mean Requests/Second. Based on all ' + type + ' Load Test Runs',
      hAxis: {
        title: 'Requests/Second',
        minValue: 0
      },
      vAxis: {
        title: 'Scale Policy'
      },
      width: 900,
      height: 500
    },
    chartType: 'BarChart'
  }
}

function getData(data, type) {

  var results = {
    'inputs': [{
      'name': 'Test Description',
      'value': type + ' Load Test',
    }, {
      'name': 'Number of Test Runs',
      'value': data.length, // TODO: Divide by 2 because half the tests are for HPA
    }, {
      'name': 'Single Test Duration (seconds)',
      'value': data[0].durationSeconds,
    }, {
      'name': 'Pod Allocation (MilliCores)',
      'value': '200', // TODO: hard coded for now
    }, {
      'name': 'Pod Threshold (MilliCores)',
      'value': '150', // TODO: hard coded for now
    }, {
      'name': 'Pod Threshold (%)',
      'value': '75%', // TODO: hard coded for now
    }, {
      'name': 'Concurrent Connections',
      'value': data[0].httpConnections,
    }, {
      'name': 'Http Pipelines',
      'value': data[0].httpPipelining,
    }],
    'outputs': {
      'charts': [
        getPodUsageChartData(data, type),
        getTotalRequestsChartData(data, type),
        getUptimeChartData(data, type),
        getLatencyChartData(data, type),
        getThroughputChartData(data, type),
        getReqSecsChartData(data, type)
      ]
    }
  }

  return results;

}

function getTypeResults(type, desc, data) {
  var data = _.filter(data, function (item) {
    return item.type === type
  });

  if (!data || data.length === 0) {
    return null;
  }

  // console.log('data::: ' + JSON.stringify(data));

  return getData(data, desc);
}

function parseResults(data, cb) {

  var result = {
    'cpuResults': getTypeResults('CPU_LOAD', 'CPU', data),
    'memoryResults': getTypeResults('MEMORY_LOAD', 'MEMORY', data),
    'ioResults': getTypeResults('IO_LOAD', 'IO', data),
  }

  cb(null, result);
}

exports.getAll = function (cb) {

  resultsModel.getAll(function (err, data) {
    if (err) {
      cb(err)
    } else {
      parseResults(data, cb);
    }
  })
}
