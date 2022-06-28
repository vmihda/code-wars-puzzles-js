const arr = [
	{
		v: 5,
		c: [
			{
				v: 5,
				c: [
					{
						v: 11
					}
				]
			},
			{
				v: 10,
			},
			{
				v: 11,
			}
		]
	},
	{
		v: 6,
	},
]


function treeSum(tree) {
	if (!tree.length) {
		return 0;
	}

	let sum = 0;
	let stack = [];

	tree.forEach(node => stack.push(node))

	while (stack.length) {
		let node = stack.pop()

		sum += node.v

		if (node.c) {
			node.c.forEach(n => stack.push(n))
		}
	}

	return sum
}

function treeSumRec(tree) {

	let sum = 0;

	tree.forEach((treeElement) => {
		sum += treeElement.v
		if (!treeElement.c) {
			return treeElement.v
		}
		sum += treeSumRec(treeElement.c)
	})

	return sum
}


console.log("treeSum()", treeSum(arr))
console.log("treeSumRec()", treeSumRec(arr))
