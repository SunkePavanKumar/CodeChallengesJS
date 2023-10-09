function numberRange(start, end) {
  let num = [];
  if (start === end) return [start];

  return numberRanges(start, end--);
  num.push(end);
}

module.exports = numberRange;
