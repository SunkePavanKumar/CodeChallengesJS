function findMaxNumber(arr) {
   // return Math.max(...arr)
   let maxNumber = Number.MIN_VALUE;
   for(let num of arr){
    if(maxNumber < num) maxNumber = num
   }
   return maxNumber;
}

module.exports = findMaxNumber;
