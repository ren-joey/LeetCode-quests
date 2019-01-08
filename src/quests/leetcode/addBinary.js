/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let overflow = false
  let aLength = a.length - 1
  let bLength = b.length - 1
  let result = []

  while (aLength >= 0 || bLength >= 0 || overflow) {
    let nA = (+a[aLength--]) || 0
    let nB = (+b[bLength--]) || 0
    let v = nA + nB + overflow
    overflow = v > 1
    result.push(v % 2)
  }

  return result.reverse().join('')
}
module.exports = addBinary