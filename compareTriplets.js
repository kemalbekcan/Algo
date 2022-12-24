function compareTriplets(a, b) {
	var alicePoint = 0;
	var nobody = 0;
	var bobPoint = 0;
	for(var i = 0; i < a.length; i++) {
		if(a[i] > b[i]) {
			alicePoint++;
		}
		else if(a[i] == b[i]) {
			nobody++;
		}
		else {
			bobPoint++;
		}
	}
	return [alicePoint, bobPoint];
}

function main() {
	var a = [5, 6, 7];
	var b = [3, 6, 10];
	var result = compareTriplets(a, b);
	console.log('result', result);
}

main();
