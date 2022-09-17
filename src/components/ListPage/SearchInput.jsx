import React from 'react';

import searchIcon from '../../assets/Icon.svg';
import classes from '../../Styles/ListPage/SearchInput.module.scss';

const SearchInput = ({ onSearch }) => {
	return (
		<div className={classes.search}>
			<img
				src={searchIcon}
				alt='search icon'
				className={classes.search__icon}
			/>
			<input
				type='text'
				className={classes.search__input}
				placeholder='Search'
				onChange={(e) => onSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
