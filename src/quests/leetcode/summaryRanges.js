/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 1) {
    return [nums[0].toString()]
  }
  if (nums.length === 0) {
    return []
  }

  let leftSide = 0
  let rightSide = 1
  let res = []

  do {
    if (nums[leftSide] + (rightSide - leftSide) != nums[rightSide]) {
      if (nums[leftSide] === nums[rightSide - 1]) {
        res.push(nums[leftSide].toString())
      } else if (nums[rightSide - 1] === undefined) {
        res.push(nums[leftSide].toString())
      } else {
        res.push([nums[leftSide], nums[rightSide - 1]].join('->'))
      }
      leftSide = rightSide
      rightSide += 1
    } else {
      rightSide += 1
    }

  } while (rightSide <= nums.length)

  // function sliceFn(aData, start, end) {
  //   return aData.slice(start, end)
  // }

  return res
}
module.exports = summaryRanges