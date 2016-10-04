'use strict';

const _ = require('lodash');

function worker(items) {
  return _.sortBy(items, 'quantity').reverse();
}

module.exports = worker;
