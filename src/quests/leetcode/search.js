/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //     for (let i = 0; i < nums.length; i++) {
  //         if (nums[i] == target) {
  //             return i
  //         } else {
  //             if (target > 0) {
  //                 if (nums[i] > target) return -1
  //             } else if (target < 0) {
  //                 if (nums[i] > target) return -1
  //             }
  //         }
  //     }

  //     return -1

  //     let right = nums.length - 1
  //     let current = Math.ceil(( right ) / 2)
  //     let left = 0

  //     if (nums[right] == target) return right
  //     if (nums[left] == target) return left

  //     while(current != right && current != left) {
  //         if (nums[current] > target) {
  //             right = current
  //             current = Math.ceil( (current + left) / 2)
  //         } else if (nums[current] < target) {
  //             left = current
  //             current = Math.ceil( (right + current) / 2)
  //         } else if (nums[current] == target) {
  //             return  current
  //         }
  //     }
  //     return -1

  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let mid = left + ~~((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
module.exports = search