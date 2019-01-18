/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  N = N.toString().split('').sort((a, b) => a - b).join('')
  let length = N.length
  let lengthMatches = []
  let powerOf2 = 1

  while (powerOf2.toString().length <= length) {
    if (powerOf2.toString().length == length) lengthMatches.push(powerOf2.toString().split('').sort((a, b) => a - b).join(''))
    powerOf2 = powerOf2 * 2
  }

  return lengthMatches.includes(N)
}
module.exports = reorderedPowerOf2