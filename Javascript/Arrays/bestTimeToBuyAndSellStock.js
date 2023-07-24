var maxProfit = function (prices) {
  let minimumPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minimumPrice = minimumPrice < prices[i] ? minimumPrice : prices[i];
    maxProfit =
      maxProfit > prices[i] - minimumPrice // prices[i] - minimumPrice is currentProfit
        ? maxProfit
        : prices[i] - minimumPrice;
  }

  return maxProfit;
};
