/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // let reachIndex = [0]
  // let goal = nums.length - 1

  // for (let i = 0; i < nums.length; i++) {
  //   let indexCheck = reachIndex.indexOf(i)
  //   if(indexCheck !== -1){
  //     for (let j = 1; j <= nums[i]; j++) {
  //       reachIndexPush(i + j)
  //     }
  //   }

  //   if(reachIndex.indexOf(goal) !== -1) return true
  // }

  // return false

  // function reachIndexPush(num) {
  //   if(reachIndex.indexOf(num) === -1) reachIndex.push(num)
  // }


  // if (nums.length === 1) return true
  // let reachIndex = []
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   if ( nums[i] + i >= nums.length -1 ) reachIndex.unshift(i)
  //   else if ( nums[i] + i >= reachIndex[0] ) reachIndex.unshift(i)
  //   else continue
  // }
  // return reachIndex.indexOf(0) !== -1

  let reachIndex = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if ( nums[i] + i >= reachIndex ) reachIndex = i
    else continue
  }
  return reachIndex === 0
}

module.exports = canJump