/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {

  for (let i = 1; i <= s.length; i++) {
    if (s.length % i !== 0) continue
    if (i * 2 > s.length) return false
    if (substringCheck(s, s.slice(0, i))) return true
  }

  function substringCheck(str, pattern) {
    return (str.split(pattern).join('') === '')
  }
}

module.exports = repeatedSubstringPattern