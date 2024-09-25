import React from 'react';

const Price = ({ originalPrice, salePrice }) => {

	return (
		<div className='book-card-prices'>
			{salePrice ? <>
				<span className='book-card-price original'>${originalPrice.toFixed(2)}</span>
				<span className='book-card-price'>${salePrice.toFixed(2)}</span>
			</> : <span className='book-card-price'>${originalPrice.toFixed(2)}</span>}
		</div>
	);
};

export default Price;