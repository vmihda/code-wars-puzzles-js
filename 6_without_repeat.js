function withoutRepeat(arr) {
	const result = []
	const dictionary = {}
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		dictionary[item] = dictionary[item] ? ++dictionary[item] : 1;
	}

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (dictionary[item] === 1) {
			result.push(item)
		}
	}

	return result
}

console.log(withoutRepeat([1,1,1,2,2,3,4,4,5,6,6,6]))
