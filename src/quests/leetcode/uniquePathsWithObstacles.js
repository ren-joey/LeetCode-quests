/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0
  let height = obstacleGrid.length
  let width = obstacleGrid[0].length
  let resultMap = Array(height).fill(0).map(() => Array(width).fill(0))
  resultMap[0][0] = 1

  for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
      if (i === 0 && j === 0) continue
      if (obstacleGrid[i][j] === 1) continue
      else {
        let leftResults = (resultMap[i][j-1])? resultMap[i][j-1]: 0
        let topResults = (resultMap[i-1] && resultMap[i-1][j])? resultMap[i-1][j]: 0
        let sumResult = leftResults + topResults
        resultMap[i][j] = sumResult
        if(obstacleGrid[i][j+1] === 0){
          resultMap[i][j+1] = sumResult
        }
      }
    }
  }

  return resultMap[height - 1][width - 1]
}
module.exports = uniquePathsWithObstacles