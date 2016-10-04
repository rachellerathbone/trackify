'use strict';

const _ = require("lodash");

const worker = function(cities) {
    return _.forEach(cities, function (val, key, col) {
      if (val.population >= 1) {
        val.size = 'big';
      } else if (val.population < 1 && val.population >= 0.5) {
        val.size = 'med';
      } else {
        val.size = 'small';
      }
    });
};

module.exports = worker;
