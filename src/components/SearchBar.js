import './SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ value, handleChange }) => {
	return (
		<div className="searchBar">
			<div className="searchBar__icon">
				{' '}
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<input value={value} onChange={handleChange} className="searchBar__input" />
		</div>
	);
};

export default SearchBar;
