/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  s = s.split('')
  let leftSide = 0
  let rightSide = s.length - 1
  let res = undefined

  while(leftSide < rightSide ) {
    if (s[leftSide] === s[rightSide]) {
      leftSide += 1
      rightSide -= 1
    } else if (s[leftSide] !== s[rightSide]) {

      palindromeCheck(s.slice(leftSide, rightSide))
      if(res === false) {
        palindromeCheck(s.slice(leftSide + 1, rightSide + 1))
      }
      break
    }

    if ( leftSide >= rightSide ) {
      res = true
      break
    }
  }

  function palindromeCheck(s) {
    let leftSide2 = 0
    let rightSide2 = s.length - 1

    while (leftSide2 < rightSide2) {
      if (s[leftSide2] == s[rightSide2]) {
        leftSide2 += 1
        rightSide2 -= 1
      } else if (s[leftSide2] != s[rightSide2]) {
        res = false
        break
      }

      if(leftSide2 >= rightSide2) {
        res = true
        break
      }
    }
  }

  return (res === undefined)? true: res
}

module.exports = validPalindrome