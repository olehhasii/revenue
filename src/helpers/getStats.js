const getStats = (data) => {
	if (data == null || data.length === 0) {
		return;
	}
	let keys = [];

	data.forEach((element) => {
		keys.push(+element.curency);
	});
	const total = Math.round(keys.reduce((a, b) => a + b, 0));
	const min = Math.min.apply(null, keys.filter(Boolean));
	const max = Math.max.apply(null, keys.filter(Boolean));
	const medium = total / keys.length;
	return {
		total,
		min: Math.round(min),
		max: Math.round(max),
		medium: Math.round(medium),
	};
};

export default getStats;
