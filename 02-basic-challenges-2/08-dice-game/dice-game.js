function diceGameSimulation(num) {
  let returnArray = [];
  for (let i = 0; i < num; i++) {
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);
    let sum = dice1 + dice2;
    if (sum === 7 || sum === 11) {
      returnArray.push({ dice1, dice2, sum, result: "win" });
    } else if (sum === 2 || sum === 3 || sum === 12) {
      returnArray.push({ dice1, dice2, sum, result: "lose" });
    } else {
      returnArray.push({ dice1, dice2, sum, result: "roll again" });
    }
  }

  return returnArray;
}

module.exports = diceGameSimulation;
