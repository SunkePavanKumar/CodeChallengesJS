/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxi) {
      maxi = sum;
    }

    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
};
