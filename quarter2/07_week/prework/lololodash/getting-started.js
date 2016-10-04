'use strict';

const _ = require('lodash');

function worker(items) {
  return _.filter(items, (item) => {
    return item.active;
  });
}

module.exports = worker;
