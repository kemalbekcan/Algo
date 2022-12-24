function simpleArraySum(ar) {
	var count = 0;
	ar.forEach((item) => count += item);

	return count;
}

function main() {
	var ar = [1, 2, 3, 4, 10, 11];
	var result = simpleArraySum(ar);
	console.log('result', result);
}

main();
