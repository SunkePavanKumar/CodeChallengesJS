function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
let reversedStr = str.split("").reverse().join("")
if(str === reversedStr) return true
return false
}

module.exports = isPalindrome;
