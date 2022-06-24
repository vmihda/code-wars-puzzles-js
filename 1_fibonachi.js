function fibonachi(n) {
	if (n <= 0) {
		return 0
	}

	if (n <= 2) {
		return 1
	}

	return fibonachi(n - 1) + fibonachi(n - 2)
}


function iterationFibonachi(n) {
	if (n <= 0) {
		return 0
	}

	if (n <= 2) {
		return 1
	}

	let prev = 1;
	let result = 1;

	for (let i = 0; i < n - 2; i++) {
		const tmp = result;
		result += prev;
		prev = tmp;
	}

	return result;
}


function iterationFibonachiWhile(n) {
	if (n <= 0) {
		return 0
	}

	if (n <= 2) {
		return 1
	}

	let prev = 1;
	let result = 1;
	let count = 1;

	while (n - 1 > count) {
		count++;
		const tmp = result;
		result += prev;
		prev = tmp;
	}

	return result;
}
