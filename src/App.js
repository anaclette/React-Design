// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components/Container-cards.scss';
import './components/Filters.scss';
import './components/Forms-buttons.scss';
import Card from './components/Card';

const products = [
	{
		title: 'Coombes',
		type: 'Lounge',
		price: 2600,
		rating: 4,
		img: 'https://i.imgur.com/ZAxMGG5.png',
		isAvailable: true,
		onSale: false
	},
	{
		title: 'Keeve Set',
		type: 'Table & Chairs',
		price: 590,
		rating: 4,
		img: 'https://i.imgur.com/tT8sFIs.jpeg',
		isAvailable: false,
		onSale: false
	},
	{
		title: 'Nillè',
		type: 'Armchair',
		price: 950,
		rating: 5,
		img: 'https://i.imgur.com/Vx1cZY0.png',
		isAvailable: false,
		onSale: true
	},
	{
		title: 'Blanko',
		type: 'Side table',
		price: 90,
		rating: 4,
		img: 'https://i.imgur.com/N1Bf4ox.jpg',
		isAvailable: true,
		onSale: false
	},
	{
		title: 'Momo',
		type: 'Shelves',
		price: 890,
		rating: 4,
		img: 'https://i.imgur.com/AlKxDE4.jpeg',
		isAvailable: true,
		onSale: false
	},
	{
		title: 'Penemillè',
		type: 'Chair',
		price: 120,
		rating: 4,
		img: 'https://i.imgur.com/pmANPjN.jpeg',
		isAvailable: true,
		onSale: false
	},
	{
		title: 'Kappu',
		type: 'Shelves',
		price: 420,
		rating: 4,
		img: 'https://i.imgur.com/s2rsPa1.jpg',
		isAvailable: true,
		onSale: false
	}
];

const App = () => {
	const displayCards = true;
	return (
		<div>
			<nav>
				<div className="buttons">
					<div>
						<i>
							menu icon
							{/* <FontAwesomeIcon icon={faHome} /> */}
						</i>
						<ul>
							<li>HOME</li>
							<li>SHOP</li>
							<li>MAGAZINE</li>
						</ul>
					</div>
					<div>
						<i>cart icon</i>
						<button>LOGIN</button>
					</div>
				</div>
			</nav>

			<div className="forms">
				<div>
					<form action="post">
						<i>lupita</i>
						<label htmlFor="search-filter">
							<input type="text" value="living room" />
						</label>
					</form>
				</div>
				<div>
					<form action="post">
						<label htmlFor="best-match">
							<select name="best-match" id="best-match">
								<option value="best-match">Best match</option>
							</select>
						</label>
					</form>
				</div>
			</div>
			<div className="cards-container">
				<article className="filters">
					<h2>FILTER BY</h2>
					<label htmlFor="Select-inputs">
						<select name="Collection" id="Collection">
							<option value="Collection">Collection</option>
						</select>
						<span className="rectangle" />
						<select name="Color" id="Color">
							<option value="Color">Color</option>
						</select>
						<span className="rectangle" />
						<select name="Category" id="Category">
							<option value="Category">Category</option>
						</select>
						<span className="rectangle" />
						<select name="Price-Range" id="Price-Range">
							<option value="Price-Range">Price Range</option>
						</select>
						<div>
							<span className="circle" />
							<span className="rectangle" />
							<span className="circle" />
						</div>
					</label>
					<div>
						<span>$0</span>
						<span>$10,000+</span>
					</div>
				</article>
				{displayCards &&
					products.map((product, i) => {
						return (
							<Card
								title={product.title}
								type={product.type}
								price={product.price}
								img={product.img}
								isAvailable={product.isAvailable}
								onSale={product.onSale && 'ON SALE!'}
								key={`idTarjeta-${i}`}
							/>
						);
					})}
			</div>
			<div className="pagination">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
				<span>9</span>
				<span>10</span>
				<span>></span>
			</div>
		</div>
	);

	{
		/* <FontAwesomeIcon icon={faCoffee} />; */
	}
};

export default App;
