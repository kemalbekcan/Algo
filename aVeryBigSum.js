function aVeryBigSum(ar) {
	var sum = 0;
	ar.forEach((item) => sum += item);
	return sum;
}

function main() {
	var ar = [101000000001, 1000000002, 1000000003, 1000000004, 1000000005];
	var result = aVeryBigSum(ar);
	console.log(result);
}

main();
