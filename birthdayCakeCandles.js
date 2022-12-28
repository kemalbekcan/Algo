function birthdayCakeCandles(candles) {
  var total = 0;
  var maxCandles = Math.max.apply(null, candles);
  for (var i = 0; i < candles.length; i++) {
    if (candles[i] == maxCandles) {
      total++;
    }
  }
  return total;
}

function main() {
  var candles = [3, 2, 1, 3];
  var result = birthdayCakeCandles(candles);
  console.log("result", result);
}

main();
