// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
	const o_count = str.match(/(o|O)/g) ? str.match(/(o|O)/g).length : 0 ;
	const x_count = str.match(/(x|X)/g) ? str.match(/(x|X)/g).length : 0;
	return o_count === x_count;
}

console.log(XO('sadsa'))
console.log(XO('ooxXm'))
