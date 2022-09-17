import React, { useState } from 'react';

import SearchInput from '../components/ListPage/SearchInput';
import Table from '../components/ListPage/Table';
import classes from '../Styles/ListPage/ListPage.module.scss';

const ListPage = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<main className={classes.main}>
			<SearchInput onSearch={setSearchQuery} />
			<Table searchQuery={searchQuery} />
		</main>
	);
};

export default ListPage;
