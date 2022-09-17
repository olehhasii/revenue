import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatDate from '../../helpers/date';
import classes from '../../Styles/ListPage/table.module.scss';

const TableRow = ({ name, date, state, id }) => {
	const navigate = useNavigate();
	const formattedDate = formatDate(date);

	const navigateToItemPage = () => {
		navigate(`/item/${id}`);
	};

	return (
		<tr className={classes.table__content} onClick={navigateToItemPage}>
			<td className={classes.table__content_name}>{name}</td>
			<td className={classes.table__content_date}>{formattedDate}</td>
			<td
				className={`${classes.table__content_state} ${
					!state ? classes.disable : ''
				}`}
			>
				{state ? 'Active' : 'Disable'}
			</td>
		</tr>
	);
};

export default TableRow;
