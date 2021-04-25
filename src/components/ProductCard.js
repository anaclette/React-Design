import './ProductCard.scss';

// Components
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ title, type, price, rating, img }) => {
	return (
		<article className="productCard">
			<div className="productCard_image">
				<img src={img} alt="" />
			</div>
			<div className="productCard_content">
				<div className="productCard_content__title">
					<h4>{title}</h4>
					<p>{type}</p>
					<Rating rating={rating} />
				</div>
				<div className="productCard_content__price">
					<p>${price}</p>
					<FontAwesomeIcon icon={faShoppingCart} />
				</div>
			</div>
		</article>
	);
};

export default ProductCard;
