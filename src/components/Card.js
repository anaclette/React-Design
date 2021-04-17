import './Card.scss';

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
				<i>{rating}Rating icons</i>
				<i>Cart icon</i>
			</div>
		</article>
	);
};

export default Card;
