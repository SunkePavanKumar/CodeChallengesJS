/**
 * 
 * @param {
 * 
 * } number 
 * @returns number
 * @complexity O(n)
 * 
 * function isPrime(number) {
  if (number <= 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
 */

// Better optimum solution 0(sqrt(n))
function isPrime(number) {
  if (number <= 0) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(isPrime(25));
