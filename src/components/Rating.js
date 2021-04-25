import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // iconos solidos
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; // iconos regulares

const Rating = ({ rating }) => {
	const ratingStars = (rating) => {
		const rate = [];
		for (let i = 0; i < rating; i++) {
			rate.push(<FontAwesomeIcon icon={faStar} />);
		}
		if (rate.length < 5) {
			const rest = 5 - rate.length;
			for (let i = 0; i < rest; i++) {
				rate.push(<FontAwesomeIcon icon={faStarRegular} />);
			}
			return <div>{rate}</div>;
		} else {
			return <div>{rate}</div>;
		}
	};
	return <div className="rating">{ratingStars(rating)}</div>;
};

export default Rating;
