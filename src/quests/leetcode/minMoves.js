/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
  //     let done = true;
  //     let steps = 0;

  //     while(done){
  //         nums = findMinimum2nd(nums)
  //     }

  //     return steps;

  //     function findMinimum2nd(aNums) {
  //         aNums = aNums.sort((a, b) => {
  //             return a - b;
  //         });
  //         if(aNums[0] === aNums[aNums.length - 1]){
  //             done = false;
  //             return;
  //         }else{
  //             for(let i = 0; i < aNums.length - 1; i++){
  //                 aNums[i] += 1;
  //             }
  //             steps += 1;
  //         }
  //         return aNums;
  //     }

  // s0 - m x n
  // return nums.reduce((a,b) => a+b) - Math.min.apply(this, nums) * nums.length;

  let sum = 0
  let min = nums[0]

  nums.forEach(val => {
    sum += val
    if (val < min) min = val
  })
  return sum - min * nums.length
}
module.exports = minMoves