function miniMaxSum(arr) {
  var arrMin = Math.min.apply(null, arr);
  var arrMax = Math.max.apply(null, arr);
  var total = 0;
  var leftTotal = 0;
  var rightTotal = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  // two multiple value
  leftTotal = total - arrMax;
  rightTotal = total - arrMin;

  return leftTotal + " " + rightTotal;
}

function main() {
  var arr = [1, 2, 3, 4, 5];
  var result = miniMaxSum(arr);
  console.log("result", result);
}

main();
