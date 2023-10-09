/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 * @param {ListNode} head
 * @return {ListNode}
 */
let head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

var middleNode = function (head) {
  let current = head;
  let length = 0;
  while (current !== null) {
    length++;
    current = current.next;
  }
  let middle = Math.floor(length / 2);
  while (middle > 0) {
    head = head.next;
    middle--;
  }
  return head;
};

console.log(middleNode(head));
