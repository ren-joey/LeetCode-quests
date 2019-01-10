/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let max = 1440
  let res = 1440

  let timePointsUnique = []

  for (let i = 0; i < timePoints.length; i++) {
    let time = timePoints[i]
    time = time.split(':')
    time = (+time[0]) * 60 + (+time[1])
    if (!timePointsUnique.includes(time)) {
      timePointsUnique.push(time)
    } else {
      return 0
    }
  }

  timePointsUnique.sort((a, b) => b - a)

  for (let j = 0; j < timePointsUnique.length - 1; j++) {
    if (res === 1) {
      return 1
    }

    let between
    if (j === 0) {
      let rightSide = timePointsUnique[j] - timePointsUnique[j + 1]
      rightSide = Math.min(rightSide, max - rightSide)

      let leftSide = timePointsUnique[j] - timePointsUnique[timePointsUnique.length - 1]
      between = Math.min(rightSide, max - leftSide, leftSide)
    } else {
      between = timePointsUnique[j] - timePointsUnique[j + 1]
      between = Math.min(between, max - between)
    }
    res = Math.min(between, res)
  }

  return res
}
module.exports = findMinDifference