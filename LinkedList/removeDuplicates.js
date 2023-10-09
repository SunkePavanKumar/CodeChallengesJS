class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

let node2 = new ListNode(1);
let node1 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let deleteDuplicates = function (head) {
  let arr = [];
  let prev = head;
  let current = prev;
  while (head !== null) {
    if (arr.includes(head.val)) {
      prev.next = head.next;
    } else {
      arr.push(head.val);
      prev = head;
    }
    head = head.next;
  }
  return current;
};

console.log(deleteDuplicates(node1));
