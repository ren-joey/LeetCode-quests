/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //     let nums = nums1.concat(nums2).sort((a,b) => a-b)
  //     let length = nums.length
  //     if(length === 1) return nums[0]
  //     console.log(nums)

  let nums = []
  while (nums1.length !== 0 || nums2.length !== 0) {
    if (!nums1[0] || nums1[0] > nums2[0]) nums.push(nums2.shift())
    else if (!nums2[0] || nums1[0] < nums2[0]) nums.push(nums1.shift())
    else {
      nums.push(nums1.shift())
      nums.push(nums2.shift())
    }
  }

  let length = nums.length
  if (length % 2 === 0) {
    return (nums[length / 2 - 1] + nums[length / 2]) / 2
  } else if (length % 2 === 1) {
    return nums[Math.ceil(length / 2) - 1]
  }
}
module.exports = findMedianSortedArrays