<h5 align="center">What is this?</h5>
<h2 align="center">LeetCode 解題集</h2>

題目擷取自 <a href="https://leetcode.com/problemset/all/">LeetCode</a> ，以 JS 整合成 local 端應用。

#### **主要結構**

**JS Module**  依照項目編寫解題演算法
**Jest 單元測試** 執行 module 演算法，並注入所需的項目進行驗證，觀測返回的結果是否符合預期。

#### **檔案結構**

_**ROOT**_<br/>
  _∟&emsp;src_<br/>
    _|&emsp;&emsp;∟&emsp;leetcode_<br/>
      _|&emsp;&emsp;|&emsp;&emsp;∟&emsp;<quest_name>.js_&emsp;&emsp;&emsp;&emsp;放置解題演算法的 js module<br/>
    _|&emsp;&emsp;∟&emsp;solutions.js_&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;將所有演算法包裝輸出<br/>
  _∟&emsp;test_<br/>
    _&emsp;&emsp;∟&emsp;quest.test.js_&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;引用 solution.js 的演算法並進行注入及觀測<br/>

#### **如何開始**

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
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        1.867s
Ran all test suites.
```

#### **相關依賴**
<a href="https://leetcode.com/problemset/all/"><img src="https://camo.githubusercontent.com/4d21a2a0f2bb751bba6bae08f56fbbb87e0b0460/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313336302f312a357164504c733478395475616276514a7775376975412e706e67" width="200" /></a>&emsp;<a href="https://jestjs.io/"><img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67" width="50" /></a>&emsp;&emsp;<a href="https://eslint.org/"><img src="https://miro.medium.com/max/970/1*adPg-Z859DytSea5oLARGg.png" width="150" /></a>