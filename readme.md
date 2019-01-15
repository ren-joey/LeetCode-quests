<h5 align="center">What is this?</h5>
<h1 align="center">LeetCode 解題集</h1>

題目擷取自 <a href="https://leetcode.com/problemset/all/">LeetCode</a> ，以 JS 整合成 local 端應用。

## **主要架構**
**JS Module**  依照項目編寫解題演算法
**Jest 單元測試** 執行 module 演算法，並注入所需的項目進行驗證，觀測返回的結果是否符合預期。

## **檔案結構**

_**ROOT**_<br/>
  ∟&emsp;_**src**_<br/>
    |&emsp;&emsp;∟&emsp;_**leetcode**_<br/>
      |&emsp;&emsp;|&emsp;&emsp;∟&emsp;_<quest_name>.js_&emsp;&emsp;&emsp;&emsp;放置解題演算法的 js module<br/>
    |&emsp;&emsp;∟&emsp;_solutions.js_&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;將所有演算法包裝輸出<br/>
  ∟&emsp;_**test**_<br/>
    &emsp;&emsp;∟&emsp;_quest.test.js_&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;引用 solution.js 的演算法並進行注入及觀測<br/>

## **如何開始**

下載 gitlab

```bash
git clone https://gitlab.com/tsuyiren/code-quest.git

cd code-quest
```

安裝 npm 相關依賴

```bash
npm install
```

執行測試

```bash
npm run test
```

返回的測試結果

```bash
Test Suites: 1 passed, 1 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        1.659s
Ran all test suites.
```

## **題目總覽**

#### **LeetCode 題目**

| **NO** | **名稱** | **難度** | **簡述**(自主翻譯) | **演算法** | **原始連結** |
| ------:|---------|----------|------------------|-----------|------------|
|3|Longest Substring Without Repeating Characters|<span style="color: orange">Medium</span>|注入一組字串，找出該字串中不曾重複的子字串最大長度。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/lengthOfLongestSubstring.js)|[LINK](https://leetcode.com/problems/longest-substring-without-repeating-characters/)|
|11|Container With Most Water|<span style="color: orange">Medium</span>|注入一組長度至少為 2 的正整數陣列，將該陣列繪製成直條圖，每個值的排序代表直條圖的 X 軸座標，該值的數為直條圖 Y 軸高度。找出任意兩條線，兩線之間可以容納最多水量，並返回該水量的面積。<br><br><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" width="250">|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/maxArea.js)|[LINK](https://leetcode.com/problems/container-with-most-water/)|
|26|Remove Duplicates from Sorted Array|<span style="color: green">Easy</span>|注入一串排序過的數字串，刪除所有重複出現的項目並返回一組新字串的長度，新字串內所有的數字都只能出現一次。特別規則，不可使用額外的空間進行運算，只能在注入的數字串中進行修改得到結果。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/removeDuplicates.js)|[LINK](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)|
|41|First Missing Positive|<span style="color:red">Hard</span>|注入一組未排序的整數陣列，找出該陣列缺少的最小正整數。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/firstMissingPositive.js)|[LINK](https://leetcode.com/problems/first-missing-positive/)|
|63|Unique Paths II|<span style="color: orange">Medium</span>|放置一個機器人在 m x n 網格的左上角，並設該點為起始點。機器人一次只能往右或下移動一格，試問如果機器人要走到網格的右下角，總共有多少方法可以到達？<br><br><img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" width="250">|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/uniquePathsWithObstacles.js)|[LINK](https://leetcode.com/problems/unique-paths-ii/)|
|67|Add Binary|<span style="color: green">Easy</span>|注入兩串二進位字串，返回兩字串相加的總和，並以字串方式顯現。規則：注入的字串皆不可為空值，且只能包含 0 與 1 。且注入的字符長度無上限|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/addBinary.js)|[LINK](https://leetcode.com/problems/add-binary/)|
|191|Number of 1 Bits|<span style="color: green">Easy</span>|注入一個隨機正整數，將該數轉換為二進制字串，試問總共有多有 '1' 包含在其中。(註: 本機測試時須將二進制變數加上 0b 前綴)|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/hammingWeight.js)|[LINK](https://leetcode.com/problems/number-of-1-bits/)|
|215|Kth Largest Element in an Array|<span style="color: orange">Medium</span>|注入一組隨機陣列，返回該陣列第 k 大的數，不需將重複的數剔除|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/findKthLargest.js)|[LINK](https://leetcode.com/problems/kth-largest-element-in-an-array/)|
|228|Summary Ranges|<span style="color: orange">Medium</span>|注入一組排序過的唯一整數陣列，返回一組連續範圍的地圖陣列。<br/>例如 [1,2,3,4,6,7,9] 的範圍地圖為 ["1->4","6->7","9"]|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/summaryRanges.js)|[LINK](https://leetcode.com/problems/summary-ranges/)|
|453|Minimum Moves to Equal Array Elements|<span style="color: green">Easy</span>|注入一組不為空的整數陣列長度為 n，每次改變只能使 n - 1 個值 +1，若要將該陣列中的所有數值相等，則最少需要幾次改變幾次？|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/minMoves.js)|[LINK](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)|
|459|Repeated Substring Pattern|<span style="color: green">Easy</span>|注入一個不為空值的字串，檢查該字串是否可以被任意一個子字串組合而成，並返回 true 或 false，字串只會包含小寫字母且長度不超過 10000。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/repeatedSubstringPattern.js)|[LINK](https://leetcode.com/problems/repeated-substring-pattern/)|
|463|Island Perimeter|<span style="color: green">Easy</span>|注入一張二維整數陣列的地圖，其值為 1 或 0，1 代表陸地，0 代表海洋，兩個垂直、水平相鄰的陸地會連結在一起，所有陸地都會完全被海洋包圍，每張地圖只有會一個陸地，且不會有湖出現在陸地上。試問該地圖的陸地邊界總長為何？<br><br><img src="https://assets.leetcode.com/uploads/2018/10/12/island.png" width="200">|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/islandPerimeter.js)|[LINK](https://leetcode.com/problems/island-perimeter/)|
|498|Diagonal Traverse|<span style="color: orange">Medium</span>|Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.<br><br><img src="https://assets.leetcode.com/uploads/2018/10/12/diagonal_traverse.png" width="220">|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/findDiagonalOrder.js)|[LINK](https://leetcode.com/problems/diagonal-traverse/)|
|539|Minimum Time Difference|<span style="color: orange">Medium</span>|注入一串 24 小時制的時間陣列，以 "00:00" 的規則顯示。試找出所有時間中最接近的兩個，並返回兩者相差的分鐘數。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/findMinDifference.js)|[LINK](https://leetcode.com/problems/minimum-time-difference/)|
|650|2 Keys Keyboard|<span style="color: orange">Medium</span>|初始化一個預設字符 'A'，每次可以從下列兩個行為挑選一個來執行：<br/>(ㄧ)複製 - 複製當前字串的所有內容<br/>(二)貼上 - 貼上上次複製的內容 <br/> 注入一個數字 n，若要將字符 'A' 的總長度增長到 n ，最少需要的步驟數為何？|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/minSteps.js)|[LINK](https://leetcode.com/problems/2-keys-keyboard/)|
|680|Valid Palindrome II|<span style="color: green">Easy</span>|注入一串不為空的字串，允許刪除最多一個字元，判斷該字串是否為鏡像字串。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/validPalindrome.js)|[LINK](https://leetcode.com/problems/valid-palindrome-ii/)|
|771|Jewels and Stones|<span style="color: green">Easy</span>|字串 J 代表所有石頭中屬於寶石的有哪些，字串 S 代表你所擁有的石頭，S 字串中的每一個字符都代表一顆石頭。你想知道你擁有的石頭中，有幾顆是寶石。已知：J 字串的所有字符都是唯一的，且 A 字符與 a 字符視為不同的石頭。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/numJewelsInStones.js)|[LINK](https://leetcode.com/problems/jewels-and-stones/)|
|873|Length of Longest Fibonacci Subsequence|<span style="color: orange">Medium</span>|費波那契數列指一個數列中，任意數等於前兩數相加。注入一組隨機數字陣列，找出該陣列中可挑選出的最長費波那契子數列，並返回其長度。例如 [3, 4, 5, 6, 7, 8] 的最長費波那契子數列為 [3, 5, 8]，長度為 3|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/lenLongestFibSubseq.js)|[LINK](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)|
|890|Find and Replace Pattern|<span style="color: orange">Medium</span>|你將得到ㄧ組字串及一個字串模板，欲知哪些字串與字串模板的規則吻合，當字串的排序與重複狀態與模板相符，謂之吻合，例如 'abb' 與 'ezz' 吻合，'abc' 與 'wxy' 吻合，'aaa' 與 'qqc' 不吻合，'cde' 與 'cdd' 不吻合。返回一組新陣列內容包含所有與模板吻合的字串。|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/findAndReplacePattern.js)|[LINK](https://leetcode.com/problems/find-and-replace-pattern/)|
|929|Unique Email Addresses|<span style="color: green">Easy</span>|每個 Email 都包含一組本地名稱及網域名稱，由 @ 符號將兩者分隔開來，例如 alice@leetcode.com，alice 是本地名稱，leetcode.com 是網域名稱。除了小寫字符外，這些 email 還會包含 '.' 或 '+'。如果將 '.' 添加在本地名稱，伺服器將會忽略該字符，例如  "alice.z@leetcode.com" 與 "alicez@leetcode.com" 將會寄送到相同的位置。如果將 '+' 添加在本地名稱，所有 '+' 之後的字符將會被省略，這讓 email 規格容許添加篩選內容在 email 中，例如 m.y+name@email.com 將被寄送到 my@email.com (注意：以上規則不適用於網域名稱)。試著注入一串 email，相同的 email 位置只會被寄送一次，計算總共有多少不同 email 將被寄出？|[MODULE](https://gitlab.com/tsuyiren/code-quest/blob/master/src/quests/leetcode/numUniqueEmails.js)|[LINK](https://leetcode.com/problems/unique-email-addresses/)|

## **相關依賴**
<a href="https://leetcode.com/problemset/all/"><img src="https://camo.githubusercontent.com/4d21a2a0f2bb751bba6bae08f56fbbb87e0b0460/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313336302f312a357164504c733478395475616276514a7775376975412e706e67" width="200" /></a>&emsp;<a href="https://jestjs.io/"><img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67" width="50" /></a>&emsp;&emsp;<a href="https://eslint.org/"><img src="https://miro.medium.com/max/970/1*adPg-Z859DytSea5oLARGg.png" width="150"  /></a>