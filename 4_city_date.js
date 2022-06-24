const list = {
	'City 1': new Data('2022-06-18'),
	'City 2': new Data('2023-012-18'),
	'City 3': new Data('2024-08-22'),
	'City 4': new Data('2025-07-10'),
	'City 5': new Data('2026-03-08'),
	'City 6': new Data('2023-04-01'),
}


function concertsToArray(concerts) {
	return Object.keys(concerts)
			.filter(city => [concerts[city] > new Date()])
			.sort((a, b) => concerts[a] - concerts[b])
}

console.log(concertsToArray(list))
