/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  // let res = 0;
  // for(let i = 0; i < height.length; i++) {
  //     for(let j = 0; j < height.length; j++) {
  //         if (i != j){
  //             let min = (height[i] > height[j])? height[j]: height[i];
  //             let weight = (i > j)? i - j: j - i;
  //             res = Math.max(res, min*weight);
  //         }
  //     }
  // }
  // return res;

  let max = Math.max.apply(null, height)
  let res = 0

  while (max > 0) {
    let left = height.indexOf(max)
    if (max * (height.length - 1 - left) > res) {
      if (left != -1 && left != height.length - 1) {
        for (let right = height.length - 1; right > left; right--) {
          // console.log(max,left,right);
          if (height[right] >= max) {
            res = Math.max(max * (right - left), res)
          } else {
            res = Math.max(height[right] * (right - left), res)
          }
        }
      }
    }
    max -= 1
  }
  return res
}
module.exports = maxArea