// function isPowerOfTwo(num) {
//   for (let i = 0; i <= num; i++) {
//     if (Math.pow(2, i) === num) return true;
//   }
//   return false;
// }

function isPowerOfTwo(num) {
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      if (num === 1) return true;
    } else {
      return false;
    }
  }
}

console.log(isPowerOfTwo(15));
