import React, { useState } from 'react';
// Components
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import Filters from './Filters';
// import PageNumber from './Pagination';
// Styles
import './App.scss';

const App = (index) => {
	const productsList = [
		{
			title: 'Coombes',
			type: 'Lounge',
			price: 2600,
			rating: 4,
			img: 'https://i.imgur.com/ZAxMGG5.png',
			category: 'furniture',
			color: 'gray',
			collection: 'classic'
		},
		{
			title: 'Keeve Set',
			type: 'Table & Chairs',
			price: 590,
			rating: 4,
			img: 'https://i.imgur.com/tT8sFIs.jpeg',
			category: 'furniture',
			color: 'wood',
			collection: 'modern'
		},
		{
			title: 'Nillè',
			type: 'Armchair',
			price: 950,
			rating: 5,
			img: 'https://i.imgur.com/Vx1cZY0.png',
			category: 'furniture',
			color: 'orange',
			collection: 'classic'
		},
		{
			title: 'Blanko',
			type: 'Side table',
			price: 90,
			rating: 4,
			img: 'https://i.imgur.com/N1Bf4ox.jpg',
			category: 'furniture',
			color: 'white',
			collection: 'modern'
		},
		{
			title: 'Momo',
			type: 'Shelves',
			price: 890,
			rating: 4,
			img: 'https://i.imgur.com/AlKxDE4.jpeg',
			category: 'auxiliars',
			color: 'wood',
			collection: 'classic'
		},
		{
			title: 'Penemillè',
			type: 'Chair',
			price: 120,
			rating: 4,
			img: 'https://i.imgur.com/pmANPjN.jpeg',
			category: 'furniture',
			color: 'white',
			collection: 'modern'
		},
		{
			title: 'Kappu',
			type: 'Shelves',
			price: 420,
			rating: 4,
			img: 'https://i.imgur.com/s2rsPa1.jpg',
			category: 'auxiliars',
			color: 'wood',
			collection: 'classic'
		}
	];
	const [ products, setProducts ] = useState(productsList);
	const [ search, setSearch ] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
		if (!e.target.value) {
			setProducts(productsList);
		} else {
			setProducts(
				productsList.filter(
					(p) =>
						p.title.toLowerCase().match(search.toLowerCase()) ||
						p.type.toLowerCase().match(search.toLowerCase())
				)
			);
		}
	};

	return (
		<div className="app">
			<NavBar />
			<SearchBar valu={search} handleChange={handleChange} />
			<section className="productContainer">
				<Filters />
				{products.map((product, i) => (
					<ProductCard
						key={i}
						title={product.title}
						type={product.type}
						price={product.price}
						rating={product.rating}
						img={product.img}
					/>
				))}
			</section>
			{/* <PageNumber key={index} /> */}
		</div>
	);
};

export default App;
