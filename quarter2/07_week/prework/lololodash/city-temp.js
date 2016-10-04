'use strict';

const _ = require('lodash');

const worker = function(cityTemps) {
  const sortedGroups = {
    hot: [],
    warm: []
  };

  _.forEach(cityTemps, (temps, cityName) => {
    const isWarm = _.some(temps, (temp) => {
      return temp > 19;
    });

    const isHot = _.every(temps, (temp) => {
      return temp > 19;
    });

    if (isHot) {
      sortedGroups.hot.push(cityName);
      return;
    }

    if (isWarm) {
      sortedGroups.warm.push(cityName);
    }
  });

  return sortedGroups;
};

module.exports = worker;
