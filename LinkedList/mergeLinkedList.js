class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeSortedLists(head1, head2) {
  let mergedList = null; // Initialize the merged list as null
  let current = null; // Initialize the current node as null

  while (head1 !== null && head2 !== null) {
    if (head1.value < head2.value) {
      if (mergedList === null) {
        mergedList = head1;
        current = mergedList;
      } else {
        current.next = head1;
        current = current.next;
      }
      head1 = head1.next;
    } else {
      if (mergedList === null) {
        mergedList = head2;
        current = mergedList;
      } else {
        current.next = head2;
        current = current.next;
      }
      head2 = head2.next;
    }
  }

  // If one of the lists is not exhausted, append the remaining nodes
  if (head1 !== null) {
    if (mergedList === null) {
      mergedList = head1;
    } else {
      current.next = head1;
    }
  } else {
    if (mergedList === null) {
      mergedList = head2;
    } else {
      current.next = head2;
    }
  }

  return mergedList;
}

// Helper function to display a linked list
function displayList(head) {
  let current = head;
  const result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Creating two sorted linked lists: 1 -> 3 -> 5 and 2 -> 4 -> 6
const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

const list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

// Merging the two sorted linked lists
const merged = mergeSortedLists(list1, list2);

// Displaying the merged sorted linked list
console.log("Merged Sorted List:");
displayList(merged); // Output: Merged Sorted List: 1 -> 2 -> 3 -> 4 -> 5 -> 6
