function fizzBuzzArray(num) {
  let fizzBuzzArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      fizzBuzzArray.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      fizzBuzzArray.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}

module.exports = fizzBuzzArray;
