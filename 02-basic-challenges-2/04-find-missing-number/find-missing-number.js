function findMissingNumber(nums) {
  let len = nums.length;
  if (nums.length === 0) return 1;
  if (!nums) return undefined;
  let sum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return ((len + 1) * (len + 2)) / 2 - sum;
}

module.exports = findMissingNumber;
