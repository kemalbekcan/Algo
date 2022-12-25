function plusMinus(arr) {
	// three positive
	// two negative
	// one zero
	// 0.100000
	var n = arr.length;
	var places = 1.000000 / n;
	var ds = [];
	var positive = 0;
	var negative = 0;
	var zero = 0;
	for(var i = 0; i < n; i++) {
		if(arr[i] > 0) {
			positive++;	
		}
		else if(arr[i] < 0) {
			negative++;
		}
		else {
			zero++;
		}
	}
	ds.push(positive * places);
	ds.push(negative * places);
	ds.push(zero * places);
	for(var j = 0; j < ds.length; j++) {
		ds[j] = ds[j].toFixed(6);	
	}
	return ds.map((item) => item);
}

function main() {
	var arr = [-4, 3, -9, 0, 4, 1];
	var result = plusMinus(arr);
	console.log('result', result);
}

main();
