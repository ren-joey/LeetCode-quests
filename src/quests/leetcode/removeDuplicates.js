/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // let existValues = [];
  // for(let i = nums.length - 1; i >= 0; i--){
  //     if(existValues.indexOf(nums[i]) == -1){
  //         existValues.push(nums[i]);
  //     }else{
  //         nums.splice(i, 1);
  //     }
  // }
  if (nums.length < 2) return nums.length

  let leftSideNumber = 0
  let rightSideNumber = 1
  while (rightSideNumber < nums.length) {
    if (nums[leftSideNumber] != nums[rightSideNumber]) {
      leftSideNumber += 1
      nums[leftSideNumber] = nums[rightSideNumber]
      rightSideNumber += 1
    } else {
      rightSideNumber += 1
    }
  }
  return leftSideNumber + 1
}
module.exports = removeDuplicates