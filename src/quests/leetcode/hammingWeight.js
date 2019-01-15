/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // n = n.toString(2).replace(/0/g, '')
  // return n.length

  let res = 0
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      res += 1
      n = Math.floor(n / 2)
    }
  }
  return res
}
module.exports = hammingWeight