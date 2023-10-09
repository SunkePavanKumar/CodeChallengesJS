function areAllCharactersUnique(str) {
  let newStr = "";
  if (str.length === 0) return true;
  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i])) {
      return false;
    } else {
      newStr += str[i];
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
