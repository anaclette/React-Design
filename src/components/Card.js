import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, type, price, img, rating, isAvailable }) => {
	return (
		<article className={!isAvailable ? '.not-available' : ''}>
			<div>
				<img alt={title} src={img} />
			</div>
			<h2>{title}</h2>
			<div>
				<p>{type.toUpperCase()}</p>
				<p>${price}</p>
			</div>
			<div>
				<i>
					<FontAwesomeIcon className={rating < 5 ? 'far' : 'fas'} icon={faStar} />
					<FontAwesomeIcon className={rating < 5 ? 'far' : 'fas'} icon={faStar} />
					<FontAwesomeIcon className={rating < 5 ? 'far' : 'fas'} icon={faStar} />
					<FontAwesomeIcon className={rating < 5 ? 'far' : 'fas'} icon={faStar} />
					<FontAwesomeIcon className={rating < 5 ? 'far' : 'fas'} icon={faStar} />
				</i>
				<i>
					<FontAwesomeIcon className="fa-1x" icon={faCartPlus} />
				</i>
			</div>
		</article>
	);
};

export default Card;
