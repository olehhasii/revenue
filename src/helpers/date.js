const formatDate = (date) => {
	const formattedDate = new Date(date);
	return formattedDate
		.toLocaleDateString('en-Us', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})
		.replace(/\//g, '.');
};

export const getLast30Days = (data) => {
	if (data.length === 0) {
		return;
	}
	const currDate = new Date(data[data.length - 1].date);
	const lastDate = new Date();
	const dateOffset = 24 * 60 * 60 * 1000 * 30; //30 days
	lastDate.setTime(currDate.getTime() - dateOffset);

	const filtered = data.filter((element) => new Date(element.date) > lastDate);
	return filtered.map((element) => {
		if (element.curency === 'null') {
			return { ...element, curency: '0', xAxis: formatDate(element.date) };
		}
		return { ...element, xAxis: formatDate(element.date) };
	});
};

export const getLast7Days = (data) => {
	if (data.length === 0) {
		return;
	}
	const weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	const currDate = new Date(data[data.length - 1].date);
	const lastDate = new Date();
	const dateOffset = 24 * 60 * 60 * 1000 * 7; //7 days
	lastDate.setTime(currDate.getTime() - dateOffset);

	const filtered = data.filter((element) => new Date(element.date) > lastDate);
	return filtered.map((element) => {
		if (element.curency === 'null') {
			return {
				...element,
				curency: '0',
				xAxis: weekDay[new Date(element.date).getDay()],
			};
		}
		return { ...element, xAxis: weekDay[new Date(element.date).getDay()] };
	});
};

export const filterByYear = (data) => {
	const filteredData = data.filter((el) => {
		if (new Date(el.date).getFullYear() === 2021 && el.curency !== 'null') {
			return el;
		} else if (
			new Date(el.date).getFullYear() === 2022 &&
			el.curency !== 'null'
		) {
			return el;
		}
	});

	return filteredData.map((el) => {
		if (new Date(el.date).getFullYear() === 2021) {
			return { ...el, xAxis: 2021 };
		} else if (new Date(el.date).getFullYear() === 2022) {
			return { ...el, xAxis: 2022 };
		}
	});
};

export default formatDate;
