import React from 'react';

import classes from '../../Styles/ItemPage/ItemPage.module.scss';

const Stats = ({ stats }) => {
	return (
		<div className={classes.stats}>
			<div className={classes.stats_total}>
				<h2 className={classes.stats__heading}>Total</h2>
				<span className={classes.stats__cash}>$ {stats?.total}</span>
			</div>

			<div className={classes.stats_other}>
				<div>
					<h2 className={classes.stats__heading}>Min</h2>
					<span className={classes.stats_other_cash}>$ {stats?.min}</span>
				</div>
				<div>
					<h2 className={classes.stats__heading}>Medium</h2>
					<span className={classes.stats_other_cash}>$ {stats?.medium}</span>
				</div>
				<div>
					<h2 className={classes.stats__heading}>Max</h2>
					<span className={classes.stats_other_cash}>$ {stats?.max}</span>
				</div>
			</div>
		</div>
	);
};

export default Stats;
