function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, start, end, target) {
  if (start > end) return -1;
  let middle = Math.floor(start + (end - start) / 2);
  if (arr[middle] === target) return middle;
  if (arr[middle] < target)
    return recursiveBinarySearch(arr, middle + 1, end, target);
  return recursiveBinarySearch(arr, start, middle - 1, target);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(recursiveBinarySearch(arr, 0, 5, 100));
