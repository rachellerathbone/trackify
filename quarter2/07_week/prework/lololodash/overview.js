'use strict';

const _ = require('lodash');

const worker = function(orders) {
  const articles = _.reduce(orders, (result, order) => {
    const items = _.filter(result, (item) => {
      return item.article === order.article;
    });

    if (items.length === 0) {
      return result.concat({
        article: order.article,
        total_orders: order.quantity
      });
    } else {
      items[0].total_orders += order.quantity;

      return result;
    }
  }, []);

  return _.sortBy(articles, 'article').reverse();
};

module.exports = worker;
