import './Pagination.scss';

const PageNumber = (index) => {
	let pages = [];
	let amountPages = 10;
	for (let i = 1; i <= amountPages; i++) {
		pages.push([ i ]);
	}
	return (
		<div className="pagination" key={index}>
			{pages}
		</div>
	);
};

export default PageNumber;
