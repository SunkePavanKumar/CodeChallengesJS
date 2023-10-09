function arrayIntersection(arr1, arr2) {
  let intersectionArray = arr1.filter((num) => arr2.includes(num));
  return intersectionArray;
}

module.exports = arrayIntersection;
