import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chart from '../components/ItemPage/Chart';
import { SortByDate } from '../helpers/sort';

import classes from '../Styles/ItemPage/ItemPage.module.scss';

const ItemPage = () => {
	const { id } = useParams();
	const [chartData, setChartData] = useState([]);
	const [chartPeriod, SetChartPeriod] = useState('week');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://oril-coins-test.herokuapp.com/item/${id}`
			);
			const data = await response.json();
			setChartData(SortByDate(data.data));
		};

		fetchData();
	}, [id]);

	const changePeriodHandler = (period) => {
		SetChartPeriod(period);
	};

	return (
		<main className={classes.main}>
			<div className={classes.header}>
				<h1 className={classes.header__name}>Revenue</h1>
				<div className={classes.header__btns}>
					<button
						className={
							chartPeriod === 'week' ? classes.btn_active : classes.btn
						}
						onClick={() => changePeriodHandler('week')}
					>
						Week
					</button>
					<button
						className={
							chartPeriod === 'month' ? classes.btn_active : classes.btn
						}
						onClick={() => changePeriodHandler('month')}
					>
						Month
					</button>
					<button
						className={
							chartPeriod === 'year' ? classes.btn_active : classes.btn
						}
						onClick={() => changePeriodHandler('year')}
					>
						Year
					</button>
				</div>
			</div>
			<Chart data={chartData} chartPeriod={chartPeriod} />
		</main>
	);
};

export default ItemPage;
