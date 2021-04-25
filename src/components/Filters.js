import Filter from './Filter';
import PriceRange from './PriceRange';
import './Filters.scss';

const Filters = () => {
	return (
		<div className="filters">
			<p className="filters_filterBy">FILTER BY</p>
			<Filter name="Collection" />
			<Filter name="Color" />
			<Filter name="Category" />
			<PriceRange />
		</div>
	);
};

export default Filters;
