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
    let expected = [1, 2, 4, 7, 5, 3, 3, 6, 8, 1, 4, 2, 9, 2, 0, 1, 1, 7, -1, 5, 7, 8, 6, 3, 8, 5, 1, 7, 0, 9, 7, 1, 1, 5, 8, 1]
    expect(solutions.findDiagonalOrder(input).toString()).toBe(expected.toString())
  })
})

describe(`
==================================================================
41. First Missing Positive
Hard - https://leetcode.com/problems/first-missing-positive/
==================================================================
Given an unsorted integer array, find the smallest missing positive integer.
`, () => {
  test(`
  Input: []
  Output: 1
  `, () => {
    let input = []
    let output = 1
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })

  test(`
  Input: [2]
  Output: 1
  `, () => {
    let input = [2]
    let output = 1
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })

  test(`
  Input: [0]
  Output: 1
  `, () => {
    let input = [0]
    let output = 1
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })

  test(`
  Input: [3,4,-1,1]
  Output: 2
  `, () => {
    let input = [3,4,-1,1,1]
    let output = 2
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })

  test(`
  Input: [0,2,2,1,1]
  Output: 3
  `, () => {
    let input = [0,2,2,1,1]
    let output = 3
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })

  test(`
  Input: [7,8,9,11,12]
  Output: 1
  `, () => {
    let input = [7,8,9,11,12]
    let output = 1
    expect(solutions.firstMissingPositive(input)).toBe(output)
  })
})

describe(`
==================================================================
680. Valid Palindrome II
Easy - https://leetcode.com/problems/valid-palindrome-ii/
==================================================================
Given a non-empty string s, you may delete at most one character.
Judge whether you can make it a palindrome.
`, () => {
  test(`
  Input: "aba"
  Output: true
  `, () => {
    let input = 'aba'
    let output = true
    expect(solutions.validPalindrome(input)).toBe(output)
  })

  test(`
  Input: "abcca"
  Output: false
  Explanation: You could delete the character 'c'.
  `, () => {
    let input = 'abca'
    let output = true
    expect(solutions.validPalindrome(input)).toBe(output)
  })

  test(`
  Input: "aydmda"
  Output: true
  `, () => {
    let input = 'aydmda'
    let output = true
    expect(solutions.validPalindrome(input)).toBe(output)
  })

  test(`
  Input: "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  Output: true
  `, () => {
    let input = 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'
    let output = true
    expect(solutions.validPalindrome(input)).toBe(output)
  })
})

describe(`
==================================================================
191. Number of 1 Bits
Easy - https://leetcode.com/problems/number-of-1-bits/
==================================================================
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
`, () => {
  test(`
  Input: 0b00000000000000000000000000001011
  Output: 3
  Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
  `, () => {
    let input = 0b00000000000000000000000000001011
    let output = 3
    expect(solutions.hammingWeight(input)).toBe(output)
  })

  test(`
  Input: 0b00000000000000000000000010000000
  Output: 1
  `, () => {
    let input = 0b00000000000000000000000010000000
    let output = 1
    expect(solutions.hammingWeight(input)).toBe(output)
  })

  test(`
  Input: 0b11111111111111111111111111111101
  Output: 31
  `, () => {
    let input = 0b11111111111111111111111111111101
    let output = 31
    expect(solutions.hammingWeight(input)).toBe(output)
  })
})

describe(`
==================================================================
55. Jump Game
Medium - https://leetcode.com/problems/jump-game/
==================================================================
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
`, () => {

  test(`
  Input: [0]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
  `, () => {
    let input = [0]
    let output = true
    expect(solutions.canJump(input)).toBe(output)
  })

  test(`
  Input: [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
  `, () => {
    let input = [2,3,1,1,4]
    let output = true
    expect(solutions.canJump(input)).toBe(output)
  })

  test(`
  Input: [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
  jump length is 0, which makes it impossible to reach the last index.
  `, () => {
    let input = [3,2,1,0,4]
    let output = false
    expect(solutions.canJump(input)).toBe(output)
  })

  test(`
  let input = [3,2,1,5,4,2,2,1,2,0,0,0]
  let output = false
  `, () => {
    let input = [3,2,1,5,4,2,2,1,2,0,0,0]
    let output = false
    expect(solutions.canJump(input)).toBe(output)
  })
})

describe(`
==================================================================
869. Reordered Power of 2
Medium - https://leetcode.com/problems/reordered-power-of-2/
==================================================================
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.
Return true if and only if we can do this in a way such that the resulting number is a power of 2.
`, () => {

  test(`
  Input: 1
  Output: true
  `, () => {
    let input = 1
    let output = true
    expect(solutions.reorderedPowerOf2(input)).toBe(output)
  })

  test(`
  Input: 10
  Output: false
  `, () => {
    let input = 10
    let output = false
    expect(solutions.reorderedPowerOf2(input)).toBe(output)
  })

  test(`
  Input: 46
  Output: true
  `, () => {
    let input = 46
    let output = true
    expect(solutions.reorderedPowerOf2(input)).toBe(output)
  })

  test(`
  Input:  4015678
  Output: true
  `, () => {
    let input = 4015678
    let output = true
    expect(solutions.reorderedPowerOf2(input)).toBe(output)
  })

  test(`
  Input: 4015668
  Output: false
  `, () => {
    let input = 4015668
    let output = false
    expect(solutions.reorderedPowerOf2(input)).toBe(output)
  })
})

describe(`
==================================================================
75. Sort Colors
Medium - https://leetcode.com/problems/sort-colors/
==================================================================
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Note: You are not suppose to use the library's sort function for this problem.
`, () => {

  test(`
  input: [2,0,2,1,1,0]
  output: [0,0,1,1,2,2]
  `, () => {
    let input = [2,0,2,1,1,0]
    let output = [0,0,1,1,2,2]

    solutions.sortColors(input)
    expect(input.toString()).toBe(output.toString())
  })
})

describe(`
==================================================================
860. Lemonade Change
Easy - https://leetcode.com/problems/lemonade-change/
==================================================================
At a lemonade stand, each lemonade costs $5.
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Return true if and only if you can provide every customer with correct change.
`, () => {

  test(`
  Input: [5,5,5,10,20]
  Output: true
  Explanation:
  From the first 3 customers, we collect three $5 bills in order.
  From the fourth customer, we collect a $10 bill and give back a $5.
  From the fifth customer, we give a $10 bill and a $5 bill.
  Since all customers got correct change, we output true.
  `, () => {
    let input = [5,5,5,10,20]
    let output = true
    expect(solutions.lemonadeChange(input)).toBe(output)
  })

  test(`
  Input: [5,5,10]
  Output: true
  `, () => {
    let input = [5,5,10]
    let output = true
    expect(solutions.lemonadeChange(input)).toBe(output)
  })

  test(`
  Input: [10,10]
  Output: false
  `, () => {
    let input = [10,10]
    let output = false
    expect(solutions.lemonadeChange(input)).toBe(output)
  })

  test(`
  Input: [5,5,10,10,20]
  Output: false
  Explanation:
  From the first two customers in order, we collect two $5 bills.
  For the next two customers in order, we collect a $10 bill and give back a $5 bill.
  For the last customer, we can't give change of $15 back because we only have two $10 bills.
  Since not every customer received correct change, the answer is false.
  `, () => {
    let input = [5,5,10,10,20]
    let output = false
    expect(solutions.lemonadeChange(input)).toBe(output)
  })
})

describe(`
==================================================================
509. Fibonacci Number
Easy - https://leetcode.com/problems/fibonacci-number/
==================================================================
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
`, () => {

  test(`
  Input: 2
  Output: 1
  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
  `, () => {
    let input = 2
    let output = 1
    expect(solutions.fib(input)).toBe(output)
  })

  test(`
  Input: 4
  Output: 3
  Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
  `, () => {
    let input = 4
    let output = 3
    expect(solutions.fib(input)).toBe(output)
  })

  test(`
  Input: 30
  Output: 832040
  `, () => {
    let input = 30
    let output = 832040
    expect(solutions.fib(input)).toBe(output)
  })
})

describe(`
==================================================================
641. Design Circular Deque
Medium - https://leetcode.com/problems/design-circular-deque/
==================================================================
Design your implementation of the circular double-ended queue (deque).
Your implementation should support following operations:

MyCircularDeque(k): Constructor, set the size of the deque to be k.
insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
getRear(): Gets the last item from Deque. If the deque is empty, return -1.
isEmpty(): Checks whether Deque is empty or not.
isFull(): Checks whether Deque is full or not.
`, () => {

  test(`
  MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
  circularDeque.insertLast(1);			// return true
  circularDeque.insertLast(2);			// return true
  circularDeque.insertFront(3);			// return true
  circularDeque.insertFront(4);			// return false, the queue is full
  circularDeque.getRear();  			// return 2
  circularDeque.isFull();				// return true
  circularDeque.deleteLast();			// return true
  circularDeque.insertFront(4);			// return true
  circularDeque.getFront();			// return 4
  `, () => {
    let input = 3
    let circularDeque = new solutions.MyCircularDeque(input)
    expect(circularDeque.insertLast(1)).toBeTruthy()
    expect(circularDeque.insertLast(2)).toBeTruthy()
    expect(circularDeque.insertFront(3)).toBeTruthy()
    expect(circularDeque.insertFront(4)).toBeFalsy()
    expect(circularDeque.getRear()).toBe(2)
    expect(circularDeque.isFull()).toBeTruthy()
    expect(circularDeque.deleteLast()).toBeTruthy()
    expect(circularDeque.insertFront(4)).toBeTruthy()
    expect(circularDeque.getFront()).toBe(4)
  })
})

describe(`
==================================================================
704. Binary Search
Easy - https://leetcode.com/problems/binary-search/
==================================================================
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
`, () => {

  test(`
  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4
  `, () => {
    let input = [[-1,0,3,5,9,12], 9]
    let output = 4
    expect(solutions.search.apply(null, input)).toBe(output)
  })

  test(`
  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
  `, () => {
    let input = [[-1,0,3,5,9,12], 2]
    let output = -1
    expect(solutions.search.apply(null, input)).toBe(output)
  })
})

describe(`
==================================================================
4. Median of Two Sorted Arrays
Hard - https://leetcode.com/problems/median-of-two-sorted-arrays/
==================================================================
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.
`, () => {

  test(`
  nums1 = [1, 3]
  nums2 = [2]
  The median is 2.0
  `, () => {
    let input = [[1, 3], [2]]
    let output = 2
    expect(solutions.findMedianSortedArrays.apply(null, input)).toBe(output)
  })

  test(`
  nums1 = [1, 2]
  nums2 = [3, 4]
  The median is (2 + 3)/2 = 2.5
  `, () => {
    let input = [[1, 2], [3, 4]]
    let output = 2.5
    expect(solutions.findMedianSortedArrays.apply(null, input)).toBe(output)
  })
})

