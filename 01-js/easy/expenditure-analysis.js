/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryMap = {};

  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    var category = transaction.category;
    var price = transaction.price;

    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  var result = [];

  for (var category in categoryMap) {
    var categoryObj = {};
    categoryObj[category] = categoryMap[category];
    result.push(categoryObj);
  }

  return result.map(obj => ({ category: Object.keys(obj)[0], totalSpent: obj[Object.keys(obj)[0]] }));
}

module.exports = calculateTotalSpentByCategory;
