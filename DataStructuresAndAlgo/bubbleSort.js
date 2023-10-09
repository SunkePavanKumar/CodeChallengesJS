/**
 * Given an array of integers sort the array
 * Note : Don't use the built in methods
 */

const swap = (arr, index) => {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
};
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let testArray = [1, 2, 7, 2, 3, 5, -1, -10];
console.log(bubbleSort(testArray));
