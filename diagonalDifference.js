function diagonalDifference(arr) {
	// 11 + 5 + -12 = 4
	// 4 + 5 + 10 = 19
	// |19 - 4| = 15
	var diag1 = 0;
	var diag2 = 0;
	for(var i = 0; i < arr.length; i++) {
		diag1 += arr[i][i];
		diag2 += arr[i][arr.length - i - 1];
	}
	return Math.abs(diag1 - diag2);
}

function main() {
	var arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
	var result = diagonalDifference(arr);
	console.log('result', result);
}

main();
