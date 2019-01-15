/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // nums = nums.sort((a, b) => a - b)
  // nums = nums.filter(num => (num > 0))
  // if(nums.length === 0) return 1

  // let uniqueNums = []
  // nums.forEach(num => {
  //   if(!uniqueNums.includes(num)) uniqueNums.push(num)
  // })

  // let max = uniqueNums[uniqueNums.length - 1]

  // for (let i = 0; i < max; i++){
  //   if((+uniqueNums[i]) !== i + 1) return i + 1
  // }
  // return max + 1


  // nums = nums.sort((a, b) => a - b)

  // let expected = 1
  // for (let i = 0; i < nums.length; i++) {
  //   if ( nums[i] < 1 ) continue
  //   if ( nums[i] < expected ) continue
  //   if ( nums[i] == expected ) expected += 1
  //   else return expected
  // }
  // return expected

  let expected = 1
  while (nums.includes(expected)){
    expected += 1
  }
  return expected
}

module.exports = firstMissingPositive