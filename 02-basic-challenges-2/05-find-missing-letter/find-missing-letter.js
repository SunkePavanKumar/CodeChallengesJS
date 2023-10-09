function findMissingLetter(arr) {
  let helperString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startIndex = helperString.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== helperString[startIndex + i]) {
      return helperString[startIndex + i];
    }
  }
}

module.exports = findMissingLetter;
