// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(arr) {
	const dict = {};

	for (let i = 0; i < arr.length; i++) {
		dict[arr[i]] = dict[arr[i]] ? ++dict[arr[i]] : 1
	}

	for (const dictKey in dict) {
		if (dict[dictKey] % 2) {
			return +dictKey
		}
	}
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOdd([0, 1, 0, 1, 0]))
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
