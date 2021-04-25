import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const PriceRange = () => {
	return (
		<div className="priceRange">
			<span>Price Range</span>
			<div className="priceRange_slider">
				<FontAwesomeIcon icon={faCircle} />
				<FontAwesomeIcon icon={faCircle} />
			</div>
			<div className="priceRange_prices">
				<p>$0</p>
				<p>$10.000+</p>
			</div>
		</div>
	);
};

export default PriceRange;
