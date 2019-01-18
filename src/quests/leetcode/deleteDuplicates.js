/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head

  let start = head
  let prev = head
  let current = head.next

  while (current) {
    if (current.val == prev.val) {
      prev.next = current.next
      current = current.next
    } else {
      prev = current
      current = current.next
    }
  }

  return start
}
module.exports = deleteDuplicates