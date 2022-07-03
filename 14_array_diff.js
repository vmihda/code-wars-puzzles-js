function arrayDiff(a, b) {
	if (!b.length) {
		return a
	}
	return a.filter(x => !b.includes(x));
}

function arrayDiff2(a1, a2) {
	let result = [];
	for (let i = 0; i < a1.length; i++) {
		if (a2.indexOf(a1[i]) === -1) {
			result.push(a1[i]);
		}
	}
	return result;
}

console.log(arrayDiff([1, 2, 2], [])) // [1,2,3]
console.log(arrayDiff([], [1, 2])) // []
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]
console.log(arrayDiff([1, 2], [1])) // [2]

console.log(arrayDiff2([1, 2, 2], [])) // [1,2,3]
console.log(arrayDiff2([], [1, 2])) // []
console.log(arrayDiff2([1, 2, 3], [1, 2])) // [3]
console.log(arrayDiff2([1, 2], [1])) // [2]
