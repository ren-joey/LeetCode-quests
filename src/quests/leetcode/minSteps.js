/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
  let result = 0
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result += i
      n = n / i
    }
  }
  return result
}
module.exports = minSteps