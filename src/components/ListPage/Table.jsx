import React, { useEffect, useState } from 'react';

import TableRow from './TableRow';
import { sortByName, sortByState } from '../../helpers/sort';
import sortIcon from '../../assets/Vector.png';
import classes from '../../Styles/ListPage/table.module.scss';

const Table = ({ searchQuery }) => {
	const [tableData, setTableData] = useState([]);
	const [sortByNameAsc, setSortByNameAsc] = useState(false);
	const [sortByStateAsc, setSortByStateAsc] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://oril-coins-test.herokuapp.com/list'
			);
			const data = await response.json();
			setTableData(data);
		};

		fetchData();
	}, []);

	const sortTableHandler = (column) => {
		if (column === 'name') {
			const sortedData = sortByName(tableData, sortByNameAsc);
			setSortByNameAsc((state) => !state);
			setTableData(sortedData);
		}
		if (column === 'state') {
			const sortedData = sortByState(tableData, sortByStateAsc);
			setSortByStateAsc((state) => !state);
			setTableData(sortedData);
		}
	};

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th
						className={`${classes.table__header} ${classes.table__header_sortable}`}
						onClick={() => sortTableHandler('name')}
					>
						Name{' '}
						<img
							src={sortIcon}
							alt='sort'
							className={
								sortByNameAsc ? classes.sortIconAsc : classes.sortIconDesc
							}
						/>
					</th>
					<th className={classes.table__header}>Date</th>
					<th
						className={`${classes.table__header} ${classes.table__header_sortable}`}
						onClick={() => sortTableHandler('state')}
					>
						State
						<img
							src={sortIcon}
							alt='sort'
							className={
								sortByStateAsc ? classes.sortIconAsc : classes.sortIconDesc
							}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				{tableData
					.filter((row) =>
						row.name.toLowerCase().includes(searchQuery.toLowerCase())
					)
					.map((row) => {
						return (
							<TableRow
								key={row.id}
								name={row.name}
								date={row.date}
								state={row.isActive}
								id={row.id}
							/>
						);
					})}
			</tbody>
		</table>
	);
};

export default Table;
