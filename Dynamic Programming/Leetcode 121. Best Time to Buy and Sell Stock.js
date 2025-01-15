/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];

  // Start from 1 and calculate the maxProfit on that day
  // If stock is sold on that day
  let maxProfit = 0;
  for(let i = 1; i < prices.length; i++) {
    let currentProfit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);

    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};