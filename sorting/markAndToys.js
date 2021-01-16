// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

// Takes an array on prices (unordered) and a total budget to buy as many toys as possible
// Return int of the max number of toys that can be purchased

function maximumToys(prices, k) {
  let totalSpending = 0;
  let toyCount = 0;

  prices
    .sort((a, b) => a - b)
    .forEach((num) => {
      if (parseInt(num) + totalSpending <= k) {
        totalSpending += parseInt(num);
        toyCount++;
      }
    });
  return toyCount;
}

module.exports = maximumToys;
