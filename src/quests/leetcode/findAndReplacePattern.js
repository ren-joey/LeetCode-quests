/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
  return words.filter(word => {
    let checker = {}
    for (let i = 0; i < word.length; i++) {
      if (checker[pattern[i]]) {
        if (checker[pattern[i]] !== word[i]) {
          // console.log(checker[pattern[i]], word[i])
          return false
        }
      } else {
        if (Object.values(checker).includes(word[i])) {
          return false
        }
        checker[pattern[i]] = word[i]
      }
    }
    return true
  })

  //     pattern = strRegex(pattern);
  //     function strRegex(str) {
  //         let keyMap = {};
  //         let nextKey = 0;
  //         str = str.split('');
  //         let max = str.length - 1;
  //         let result = '';
  //         while(max >= 0){
  //             if( keyMap[str[max]] === undefined){
  //                 keyMap[str[max]] = nextKey;
  //                 nextKey += 1;
  //             }
  //             result = keyMap[str[max--]] + result;
  //         }
  //         return result;
  //     }
  //     return words.filter(word => strRegex(word) == pattern);
}
module.exports = findAndReplacePattern