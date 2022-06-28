// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
	const int = Math.sqrt(sq);
	return Number.isInteger(int) ? Math.pow(int + 1, 2) : -1
}


console.log(findNextSquare(121))
console.log(findNextSquare(155))
