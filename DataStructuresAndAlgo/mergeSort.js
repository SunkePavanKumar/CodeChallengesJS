function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let start = 0;
  let end = arr.length;
  let middle = Math.floor(start + (end - start) / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

// Helper function to merge the array;

function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArray.push(right.shift());
    } else {
      sortedArray.push(left.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

/**
 * @Test : Testing a sample test case.
 */

let arr = [100, -2, 90, 0, 87];

console.log(mergeSort(arr));
