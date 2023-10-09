function findFirstNonRepeatingCharacter(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return str[i];
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
