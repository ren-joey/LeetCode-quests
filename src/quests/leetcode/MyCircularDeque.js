/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.deque = []
  this.size = k
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.deque.length >= this.size) {
    return false
  } else {
    this.deque.unshift(value)
    return true
  }
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.deque.length >= this.size) {
    return false
  } else {
    this.deque.push(value)
    return true
  }
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.deque.length === 0) {
    return false
  } else {
    this.deque.shift()
    return true
  }
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.deque.length === 0) {
    return false
  } else {
    this.deque.pop()
    return true
  }
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.deque.length === 0) {
    return -1
  } else {
    return this.deque[0]
  }
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.deque.length === 0) {
    return -1
  } else {
    return this.deque[this.deque.length - 1]
  }
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.deque.length === 0
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.deque.length === this.size
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = Object.create(MyCircularDeque).createNew(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

 module.exports = MyCircularDeque