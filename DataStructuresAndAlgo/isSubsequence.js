/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    for (let j = i + 1; j < t.length; j++) {
      let str = t.substring(i, j);
      if (str === s) return true;
    }
  }
  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
