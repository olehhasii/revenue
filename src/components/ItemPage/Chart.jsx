import React from 'react';

import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

import { filterByYear, getLast30Days, getLast7Days } from '../../helpers/date';
import getStats from '../../helpers/getStats';
import Stats from './Stats';

const Chart = ({ data, chartPeriod }) => {
	const dataSets = {
		year: filterByYear(data),
		month: getLast30Days(data),
		week: getLast7Days(data),
	};

	const stats = getStats(dataSets[chartPeriod]);

	return (
		<>
			<ResponsiveContainer width='100%' height='50%'>
				<AreaChart data={dataSets[chartPeriod]}>
					<defs>
						<linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='10%' stopColor='#007AFF' stopOpacity={0.4} />
							<stop offset='100%' stopColor='#FFFFFF' stopOpacity={0.9} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray='4 4' stroke='#9C9C9C' opacity={0.4} />
					<Area
						dataKey='curency'
						type='monotone'
						stroke='#007AFF'
						fill='url(#gradient)'
						strokeWidth={2}
					/>
					<XAxis dataKey='xAxis' tick={{ fill: '#9C9C9C' }} />
					<YAxis
						dataKey='curency'
						tick={{ fill: '#9C9C9C' }}
						domain={[0, 1000]}
					/>
				</AreaChart>
			</ResponsiveContainer>
			<Stats stats={stats} />
		</>
	);
};

export default Chart;
