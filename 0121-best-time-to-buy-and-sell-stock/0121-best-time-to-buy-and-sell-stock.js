/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1)
        return 0;

    let profit = 0;
    let minBuyStock = prices[0];

    for(let i = 1; i < prices.length; i++) {
        minBuyStock = Math.min(minBuyStock, prices[i]);
        profit = Math.max(profit, prices[i] - minBuyStock)
    }
    return profit;
};