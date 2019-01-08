/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a)
  return nums[k - 1]
}
module.exports = findKthLargest