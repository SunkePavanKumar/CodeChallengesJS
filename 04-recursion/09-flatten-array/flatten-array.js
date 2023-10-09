function flattenArray(arr) {
  let result = [];
  for (let nums of arr) {
    if (Array.isArray(nums)) {
      result = result.concat(flattenArray(nums));
    } else result.push(nums);
  }

  return result;
}
module.exports = flattenArray;
