/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  //     let res = []
  //     let blueAmount = 0

  //     for( let i = 0; i < nums.length; i++ ) {
  //         let num = nums[i]
  //         if(num === 1){
  //             continue
  //         }else if(num === 0){
  //             nums.splice(i, 1)
  //             nums.unshift(0)
  //         }else if(num === 2){
  //             nums.splice(i, 1)
  //             blueAmount += 1
  //             i -= 1
  //         }
  //         console.log(nums)
  //     }

  //     for ( let j = 1; j <= blueAmount; j++){
  //         nums.push(2)
  //     }

  nums.push(undefined)
  let i = 0

  while (nums[i] !== undefined) {
    let num = nums[i]
    if (num === 0) {
      nums.splice(i, 1)
      nums.unshift(0)
    } else if (num === 2) {
      nums.splice(i, 1)
      nums.push(2)
      i -= 1
    }
    i += 1
  }

  nums.splice(i, 1)
}
module.exports = sortColors