// This is my approach of the code.
// function fibonacci(num) {
//   if (num < 0) return -1;
//   let arr = [];
//   let start = 0;
//   let end = 1;
//   if (num < 1) {
//     arr.push(start);
//   } else {
//     arr.push(start);
//     arr.push(end);
//   }
//   for (let i = 2; i < num; i++) {
//     let next = start + end;
//     start = end;
//     end = next;
//     arr.push(next);
//   }

//   return arr;
// }

//Alternative Approach

function fibonacci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));
