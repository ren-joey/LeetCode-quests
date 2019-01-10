const solutions = require('../src/quests/solutions')

describe(`
==================================================================
771. Jewels and Stones
Easy - https://leetcode.com/problems/jewels-and-stones/
==================================================================
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
`, () => {

  test(`
  Input: J = "aA", S = "aAAbbbb"
  Output: 3`, () => {
    let J = 'aA'
    let S = 'aAAbbbb'
    expect(solutions.numJewelsInStones(J, S)).toBe(3)
  })

  test(`
  Input: J = "z", S = "ZZ"
  Output: 0`, () => {
    let J = 'z'
    let S = 'ZZ'
    expect(solutions.numJewelsInStones(J, S)).toBe(0)
  })
})

describe(`
==================================================================
929. Unique Email Addresses
Easy - https://leetcode.com/problems/unique-email-addresses/
==================================================================
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? `, () => {

  test(`
  Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
  Output: 2
  Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails`, () => {
    let emails = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']
    expect(solutions.numUniqueEmails(emails)).toBe(2)
  })

})

describe(`
==================================================================
26. Remove Duplicates from Sorted Array
Easy - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
==================================================================
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
`, () => {

  test(`
  Given nums = [1,1,2],

  Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

  It doesn't matter what you leave beyond the returned length.
  `, () => {
    let nums = [1, 1, 2]
    expect(solutions.removeDuplicates(nums)).toBe(2)
  })

  test(`
  Given nums = [0,0,1,1,1,2,2,3,3,4],

  Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

  It doesn't matter what values are set beyond the returned length.
  `, () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(solutions.removeDuplicates(nums)).toBe(5)
  })

})

describe(`
==================================================================
67. Add Binary
Easy - https://leetcode.com/problems/add-binary/
==================================================================
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.
`, () => {

  test(`
  Input: a = "11", b = "1"
  Output: "100"
  `, () => {
    let a = '11'
    let b = '1'
    expect(solutions.addBinary(a, b)).toBe('100')
  })

  test(`
  Input: a = "1010", b = "1011"
  Output: "10101"
  `, () => {
    let a = '1010'
    let b = '1011'
    expect(solutions.addBinary(a, b)).toBe('10101')
  })

  test(`
  Input: a = "110110101010101010101010101111110101010101010101010101110000101010101011011111110100000000000011111111111010",
  b = "1101101010101010101010101011111101010101010101010101011100001010101010110111111101010"
  Output: "110110101010101010101100011101001010101010101010110101011011010101010110001011010101010101011010111111100100"
  `, () => {
    let a = '110110101010101010101010101111110101010101010101010101110000101010101011011111110100000000000011111111111010'
    let b = '1101101010101010101010101011111101010101010101010101011100001010101010110111111101010'
    expect(solutions.addBinary(a, b)).toBe('110110101010101010101100011101001010101010101010110101011011010101010110001011010101010101011010111111100100')
  })

})

describe(`
==================================================================
890. Find and Replace Pattern
Medium - https://leetcode.com/problems/find-and-replace-pattern/
==================================================================
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern.

You may return the answer in any order.
`, () => {

  test(`
  Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
  Output: ["mee","aqq"]
  Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
  "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
  since a and b map to the same letter.
  `, () => {
    let words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc']
    let pattern = 'abb'
    expect(solutions.findAndReplacePattern(words, pattern).toString()).toBe(['mee', 'aqq'].toString())
  })

  test(`
  Input: words = ["acdd","deqq","meee","aaqq","ddkd","cccc"], pattern = "aaaa"
  Output: ["cccc"]
  `, () => {
    let words = ['acdd', 'deqq', 'meee', 'aaqq', 'ddkd', 'cccc']
    let pattern = 'aaaa'
    expect(solutions.findAndReplacePattern(words, pattern).toString()).toBe(['cccc'].toString())
  })

})

describe(`
==================================================================
3. Longest Substring Without Repeating Characters
Medium - https://leetcode.com/problems/longest-substring-without-repeating-characters/
==================================================================
Given a string, find the length of the longest substring without repeating characters.
`, () => {

  test(`
  Input: "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  `, () => {
    let input = 'abcabcbb'
    expect(solutions.lengthOfLongestSubstring(input)).toBe(3)
  })

  test(`
  Input: "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  `, () => {
    let input = 'bbbbb'
    expect(solutions.lengthOfLongestSubstring(input)).toBe(1)
  })

  test(`
  Input: "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
  `, () => {
    let input = 'pwwkew'
    expect(solutions.lengthOfLongestSubstring(input)).toBe(3)
  })

  test(`
  Input: "qwksskwqskwqskwqskwqavcsewqawks"
  Output: 7
  `, () => {
    let input = 'qwksskwqskwqskwqskwqavcsewqawks'
    expect(solutions.lengthOfLongestSubstring(input)).toBe(8)
  })
})

describe(`
==================================================================
650. 2 Keys Keyboard
Medium - https://leetcode.com/problems/2-keys-keyboard/
==================================================================
Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.
`, () => {

  test(`
  Input: 3
  Output: 3
  Explanation:
  Intitally, we have one character 'A'.
  In step 1, we use Copy All operation.
  In step 2, we use Paste operation to get 'AA'.
  In step 3, we use Paste operation to get 'AAA'.
  `, () => {
    let input = 3
    expect(solutions.minSteps(input)).toBe(3)
  })

})


describe(`
==================================================================
228. Summary Ranges
Medium - https://leetcode.com/problems/summary-ranges/
==================================================================
Given a sorted integer array without duplicates, return the summary of its ranges.
`, () => {

  test(`
  Input:  [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
  Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
  `, () => {
    let input = [0, 1, 2, 4, 5, 7]
    expect(solutions.summaryRanges(input).toString()).toBe(['0->2', '4->5', '7'].toString())
  })

  test(`
  Input:  [0,2,3,4,6,8,9]
  Output: ["0","2->4","6","8->9"]
  Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
  `, () => {
    let input = [0, 2, 3, 4, 6, 8, 9]
    expect(solutions.summaryRanges(input).toString()).toBe(['0', '2->4', '6', '8->9'].toString())
  })

})

describe(`
==================================================================
873. Length of Longest Fibonacci Subsequence
Medium - https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
==================================================================
A sequence X_1, X_2, ..., X_n is fibonacci-like if:

n >= 3
X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci-like subsequence of A.  If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)
`, () => {

  test(`
  Input: [1,2,3,4,5,6,7,8]
  Output: 5
  Explanation:
  The longest subsequence that is fibonacci-like: [1,2,3,5,8].
  `, () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(solutions.lenLongestFibSubseq(input)).toBe(5)
  })

  test(`
  Input: [1,3,7,11,12,14,18]
  Output: 3
  Explanation:
  The longest subsequence that is fibonacci-like:
  [1,11,12], [3,11,14] or [7,11,18].
  `, () => {
    let input = [1, 3, 7, 11, 12, 14, 18]
    expect(solutions.lenLongestFibSubseq(input)).toBe(3)
  })

})

describe(`
==================================================================
463. Island Perimeter
Easy - https://leetcode.com/problems/island-perimeter/
==================================================================
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
`, () => {

  test(`
  Input:
  [[0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]]

  Output: 16
  `, () => {
    let input = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0]
    ]
    expect(solutions.islandPerimeter(input)).toBe(16)
  })

  test(`
  Input:
  [
    [0,1,0,0,0],
    [1,1,1,1,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,1,1]
  ]

  Output: 28
  `, () => {
    let input = [
      [0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1]
    ]
    expect(solutions.islandPerimeter(input)).toBe(28)
  })

})

describe(`
==================================================================
453. Minimum Moves to Equal Array Elements
Easy - https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
==================================================================
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
`, () => {

  test(`
  Input:
  [1,2,3]

  Output:
  3

  Explanation:
  Only three moves are needed (remember each move increments two elements):

  [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
  `, () => {
    let input = [1, 2, 3]
    expect(solutions.minMoves(input)).toBe(3)
  })

})

describe(`
==================================================================
215. Kth Largest Element in an Array
Medium - https://leetcode.com/problems/kth-largest-element-in-an-array/
==================================================================
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
`, () => {

  test(`
  Input: [3,2,1,5,6,4] and k = 2
  Output: 5
  `, () => {
    let input = [3, 2, 1, 5, 6, 4]
    let k = 2
    expect(solutions.findKthLargest(input, k)).toBe(5)
  })

  test(`
  Input: [3,2,3,1,2,4,5,5,6] and k = 4
  Output: 4
  `, () => {
    let input = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    let k = 4
    expect(solutions.findKthLargest(input, k)).toBe(4)
  })

})

describe(`
==================================================================
11. Container With Most Water
Medium - https://leetcode.com/problems/container-with-most-water/
==================================================================
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
`, () => {

  test(`
  Input: [1,8,6,2,5,4,8,3,7]
  Output: 49
  `, () => {
    let input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    expect(solutions.maxArea(input)).toBe(49)
  })

  test(`
  Input: [9,8,6,2,5,4,8,2,7]
  Output: 56
  `, () => {
    let input = [9, 8, 6, 2, 5, 4, 8, 2, 7]
    expect(solutions.maxArea(input)).toBe(56)
  })

})

describe(`
==================================================================
63. Unique Paths II
Medium - https://leetcode.com/problems/unique-paths-ii/
==================================================================
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
Now consider if some obstacles are added to the grids. How many unique paths would there be?
`, () => {

  test(`
  Input:
  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]
  Output: 2
  Explanation:
  There is one obstacle in the middle of the 3x3 grid above.
  There are two ways to reach the bottom-right corner:
  1. Right -> Right -> Down -> Down
  2. Down -> Down -> Right -> Right
  `, () => {
    let input = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    expect(solutions.uniquePathsWithObstacles(input)).toBe(2)
  })

  test(`
  Input:
  [
    [1]
  ]
  Output: 1
  `, () => {
    let input = [
      [1]
    ]
    expect(solutions.uniquePathsWithObstacles(input)).toBe(0)
  })

  test(`
  Input:
  [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]
  ]
  Output: 11
  `, () => {
    let input = [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0]
    ]
    expect(solutions.uniquePathsWithObstacles(input)).toBe(11)
  })
})

describe(`
==================================================================
539. Minimum Time Difference
Medium - https://leetcode.com/problems/minimum-time-difference/
==================================================================
Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
`, () => {

  test(`
  Input: ["23:59","00:00"]
  Output: 1
  `, () => {
    let input = ['23:59', '00:00']
    expect(solutions.findMinDifference(input)).toBe(1)
  })

  test(`
  Input: ["08:59", "11:30", "00:00", "20:13", "18:15", "05:07"]
  Output: 118
  `, () => {
    let input = ['08:59', '11:30', '00:00', '20:13', '18:15', '05:07']
    expect(solutions.findMinDifference(input)).toBe(118)
  })
})

describe(`
==================================================================
459. Repeated Substring Pattern
Easy - https://leetcode.com/problems/repeated-substring-pattern/
==================================================================
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
`, () => {

  test(`
  Input: "abab"
  Output: True
  Explanation: It's the substring "ab" twice.
  `, () => {
    let input = 'abab'
    expect(solutions.repeatedSubstringPattern(input)).toBeTruthy()
  })

  test(`
  Input: "aba"
  Output: False
  `, () => {
    let input = 'aba'
    expect(solutions.repeatedSubstringPattern(input)).toBeFalsy()
  })

  test(`
  Input: "abcabcabcabc"
  Output: True
  Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
  `, () => {
    let input = 'abcabcabcabc'
    expect(solutions.repeatedSubstringPattern(input)).toBeTruthy()
  })
})

describe(`
==================================================================
498. Diagonal Traverse
Medium - https://leetcode.com/problems/diagonal-traverse/
==================================================================
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
`, () => {

  test(`
  Input:
  []

  Output:  []
  `, () => {
    let input = []
    let expected = []
    expect(solutions.findDiagonalOrder(input).length).toBe(expected.length)
  })

  test(`
  Input:
  [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
  ]

  Output:  [1,2,4,7,5,3,6,8,9]
  `, () => {
    let input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    let expected = [1, 2, 4, 7, 5, 3, 6, 8, 9]
    expect(solutions.findDiagonalOrder(input).toString()).toBe(expected.toString())
  })

  test(`
  Input:
  [
    [1, 2, 3, 3, 7, 1],
    [4, 5, 6, 2, 1, 5],
    [7, 8, 9, 7, 8, 1]
  ]

  Output:  [1, 2, 4, 7, 5, 3, 3, 6, 8, 9, 2, 7, 1, 1, 7, 8, 5, 1]
  `, () => {
    let input = [
      [1, 2, 3, 3, 7, 1],
      [4, 5, 6, 2, 1, 5],
      [7, 8, 9, 7, 8, 1]
    ]
    let expected = [1, 2, 4, 7, 5, 3, 3, 6, 8, 9, 2, 7, 1, 1, 7, 8, 5, 1]
    expect(solutions.findDiagonalOrder(input).toString()).toBe(expected.toString())
  })

  test(`
  Input:
  [
    [1, 2, 3, 3, 0, 1],
    [4, 5, 6, 2, 1, 5],
    [7, 8, 9, 7, 8, 1],
    [1, 2, -1, 3, 7, 1],
    [4, 5, 6, 0, 1, 5],
    [7, 8, 9, 7, 8, 1]
  ]

  Output:  [1,2,4,7,5,3,3,6,8,1,4,2,9,2,0,1,1,7,-1,5,7,8,6,3,8,5,1,7,0,9,7,1,1,5,8,1]
  `, () => {
    let input = [
      [1, 2, 3, 3, 0, 1],
      [4, 5, 6, 2, 1, 5],
      [7, 8, 9, 7, 8, 1],
      [1, 2, -1, 3, 7, 1],
      [4, 5, 6, 0, 1, 5],
      [7, 8, 9, 7, 8, 1]
    ]
    let expected = [1,2,4,7,5,3,3,6,8,1,4,2,9,2,0,1,1,7,-1,5,7,8,6,3,8,5,1,7,0,9,7,1,1,5,8,1]
    expect(solutions.findDiagonalOrder(input).toString()).toBe(expected.toString())
  })
})