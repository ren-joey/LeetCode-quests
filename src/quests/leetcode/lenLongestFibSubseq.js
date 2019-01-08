/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq = function (A) {
  // let fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];

  // let i = 0;
  // let subsequences = [];

  //     while(i < A.length){
  //         for(let j = 0; j < i; j++) {
  //           if( A.includes(A[i] + A[j]) ){
  //             subsequences.push([A[j], A[i]]);
  //           }
  //         }
  //         i += 1;
  //     }

  //     i = 2;
  //     while(i < A.length){
  //         subsequences.forEach(subsequence => {
  //             if(subsequence[subsequence.length - 1] + subsequence[subsequence.length - 2] === A[i]){
  //                     subsequence.push(A[i]);
  //                 }
  //         });
  //         i += 1;
  //     }

  //     if(subsequences.length === 0){ return 0; }
  //     return Math.max.apply(this, subsequences.map(subsequence => subsequence.length));
  //     let i = 0;
  //     let subsequences = [];

  //     while(i < A.length){
  //         for(let j = 0; j < i; j++) {
  //           if( A.includes(A[i] + A[j]) ){
  //                 let index = A.indexOf(A[i] + A[j]);
  //                 subsequences.push(fetechSequence([A[j], A[i], A[index]], index, A));
  //           }
  //         }
  //       i+=1;
  //     }

  //     function fetechSequence(result, i, aOriginal){
  //         aOriginal = aOriginal.slice(i+1);

  //         while(aOriginal.length > 0) {
  //             let lastTwoAdd = arrayLastTwoAdd(result);
  //             if(lastTwoAdd === 0) return result;
  //             if(aOriginal.includes(lastTwoAdd)){
  //                 let index = aOriginal.indexOf(lastTwoAdd);
  //                 result.push(aOriginal[index]);
  //                 aOriginal = aOriginal.slice(index + 1);
  //             }else{
  //                 return result;
  //             }
  //         }
  //       return result;
  //     }

  //     function arrayLastTwoAdd (aA) {
  //         if(aA.length >= 2){
  //             return aA[aA.length - 1] + aA[aA.length - 2];
  //         } else {
  //             return 0;
  //         }
  //     }

  //     if(subsequences.length === 0){ return 0; }
  //     return Math.max.apply(this, subsequences.map(subsequence => subsequence.length));

  const n = A.length
  let max = 0
  const dp = Array(n).fill(0).map(() => Array(n).fill(0))
  for (let i = 1; i < n; i++) {
    let l = 0,
      r = i - 1
    while (l < r) {
      let sum = A[l] + A[r]
      if (sum > A[i]) {
        r--
      } else if (sum < A[i]) {
        l++
      } else {
        dp[r][i] = dp[l][r] + 1
        max = Math.max(max, dp[r][i])
        r--
        l++
      }
    }
  }
  return max == 0 ? 0 : max + 2
}
module.exports = lenLongestFibSubseq