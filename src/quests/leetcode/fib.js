/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let res = {
    '0': 0,
    '1': 1,
    '2': 1
  }
  if (res[N] !== undefined) return res[N]
  for (let i = 0; i < N - 2; i++) {
    res[0] = res[1]
    res[1] = res[2]
    res[2] = res[0] + res[1]
  }
  return res[2]
}
module.exports = fib