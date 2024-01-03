var maxProfit = function (prices) {
  let minimumPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];
    }

    let currentProfit = prices[i] - minimumPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }

  return maxProfit;
};

const prices = [100, 90, 80, 70, 60];
console.log(maxProfit(prices));
