/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let longest = 1
  let readValue = []
  for (let i = 0; i < s.length; i++) {
    if (readValue.includes(s[i])) {
      longest = Math.max(longest, readValue.length)
      readValue = readValue.slice(readValue.indexOf(s[i]) + 1)
    }
    readValue.push(s[i])
  }

  return Math.max(longest, readValue.length)
}
module.exports = lengthOfLongestSubstring