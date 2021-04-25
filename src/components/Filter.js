import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ name }) => {
	return (
		<div className="filter">
			<span>{name}</span>
			<FontAwesomeIcon icon={faAngleDown} />
		</div>
	);
};

export default Filter;
