// 这个题目说的是，给你一个整数数组，其中第 i 个元素表示的是第 i 天的股票价格，你要计算出先买一股，然后再卖出它能获得的最大利润。
//
// 比如说，给你的数组是：
//
// 9, 3, 7, 5, 1, 8
//
// 如果你在价格为 1 时买入并在价格为 8 时卖出，这时能获得最大的利润 7。
//
// 再比如说给你的数组是：
//
// 9, 8, 7, 6
//
// 这时股票每天都在跌，不存在买入再卖出来获利的可能，因此没有交易，最大利润为 0。

const foo = [9, 3, 7, 5, 1, 8];

const maxProfitBruteForce = prices => {
  if (prices.length < 2) return 0;

  let max = 0;
  for (let i = 0; i < prices.length; ++i) {
    for (let j = i + 1; j < prices.length; ++j) {
      max = Math.max(prices[j] - prices[i], max);
    }
  }
  return max;
};

const maxProfit = prices => {
  if (prices.length < 2) return 0;

  let buy = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; ++i) {
    const p = prices[i];

    if (p < buy) {
      buy = p;
    } else {
      max = Math.max(max, p - buy);
    }
  }

  return max;
};

const gg = maxProfit(foo);

console.log('gg:', gg);
