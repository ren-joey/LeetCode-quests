/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let square = grid[i][j]
      if (square === 1) {
        let border = 4
        if (i - 1 != -1 && grid[i - 1][j]) border -= 1
        if (i + 1 != grid.length && grid[i + 1][j]) border -= 1
        if (j - 1 != -1 && grid[i][j - 1]) border -= 1
        if (j + 1 != grid[i].length && grid[i][j + 1]) border -= 1
        res += border
      }
    }
  }
  return res
}
module.exports = islandPerimeter