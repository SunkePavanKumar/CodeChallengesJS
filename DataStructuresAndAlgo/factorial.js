// function fact(num) {
//   if (num === 0 || num === 1) return 1;
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// using recursion

function fact(num) {
  if (num === 0 || num === 1) return 1;
  return num * fact(num - 1);
}

console.log(fact(5));
