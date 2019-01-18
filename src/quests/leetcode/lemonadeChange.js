/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let change = {
    '5': 0,
    '10': 0
  }

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change['5'] += 1
      continue
    } else if (bills[i] === 10) {
      change['10'] += 1
      change['5'] -= 1
    } else if (bills[i] === 20) {
      if (change['10'] > 0) {
        change['10'] -= 1
        change['5'] -= 1
      } else {
        change['5'] -= 3
      }
    }

    if (change['5'] < 0) {
      return false
    }
  }

  return true
}
module.exports = lemonadeChange