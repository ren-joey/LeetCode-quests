const Trie = function () {
    this.tree = {};
    this.words = [];
};

Trie.prototype.insert = function (word) {
    this.words.push(word);
    let cur = this.tree;
    for(let i = 0; i < word.length; i += 1) {
        const c = word[i];
        if (cur[c]) {
            cur = cur[c];
        } else {
            cur[c] = {};
            cur = cur[c];
        }
    }
};

Trie.prototype.search = function (word) {
    return this.words.includes(word);
};

Trie.prototype.startsWith = function (prefix) {
    let check = true;
    let cur = this.tree;
    for (let i = 0; i < prefix.length; i += 1) {
        const c = prefix[i];
        if (cur[c]) {
            cur = cur[c];
        } else {
            check = false;
            break;
        }
    }
    return check;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie;