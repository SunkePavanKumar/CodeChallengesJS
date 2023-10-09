class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// Reverse the linked list

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev; // 'prev' will be the new head of the reversed list
}

const reversedHead = reverseLinkedList(node1);

console.log(reversedHead);

/**
 * {
 *      value : 1,
 *      next : {
 *          value : 2
 *              next :{
 *          }
 * }
 * }
 */
