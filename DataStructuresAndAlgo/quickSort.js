function quickSort(arr) {
  if (arr.length <= 0) return arr;

  let pivot = arr[0];
  // We can take anything as the pivot to make it clear and easy understanding i have took the pivot as the first element
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push[arr[i]];
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [7, 100, 1, -1, 20, -90];

console.log(quickSort(arr));

//Time conplexity

/**
 * @complexity
 */
