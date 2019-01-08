/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  let aS = S.split('')
  let aIsJewel = aS.filter(s => {
    if (J.indexOf(s) === -1) {
      return false
    } else {
      return true
    }
  })
  return aIsJewel.length
}
module.exports = numJewelsInStones