function search(num, target) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) return i;
  }
  return -1;
}
let nums = [1, 2, 34, 5, 5, 6, 4, 3];
console.log(search(nums, 34));
console.log(nums.indexOf(34));
