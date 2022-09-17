export const sortByName = (tableData, asc) => {
	const sorted = tableData.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
	const result = asc ? sorted : sorted.reverse();
	return result;
};

export const sortByState = (tableData, asc) => {
	const sorted = tableData.sort((a, b) => {
		if (a.isActive < b.isActive) {
			return -1;
		}
		if (a.isActive > b.isActive) {
			return 1;
		}
		return 0;
	});
	const result = asc ? sorted : sorted.reverse();
	return result;
};

export const SortByDate = (data) => {
	return data
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		})
		.reverse();
};
