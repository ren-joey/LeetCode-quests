/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (!matrix[0] || !matrix[0][0]) return []
  let direction = 'up'
  let x = 0
  let y = 0
  let width = matrix[0].length - 1
  let height = matrix.length - 1
  let res = []

  while (x <= width && y <= height) {
    res.push(matrix[y][x])
    if (direction === 'up') {
      if (matrix[y - 1] && ( matrix[y - 1][x + 1] || matrix[y - 1][x + 1] === 0)) {
        y -= 1
        x += 1
      } else {
        if (matrix[y][x + 1] || matrix[y][x + 1] === 0) {
          x += 1
        } else {
          y += 1
        }
        direction = 'down'
      }
    } else {
      if (matrix[y + 1] && ( matrix[y + 1][x - 1] || matrix[y + 1][x - 1] === 0)) {
        y += 1
        x -= 1
      } else {
        if (matrix[y + 1] && (matrix[y + 1][x] || matrix[y + 1][x] === 0)) {
          y += 1
        } else {
          x += 1
        }
        direction = 'up'
      }
    }
  }

  return res
}
module.exports = findDiagonalOrder