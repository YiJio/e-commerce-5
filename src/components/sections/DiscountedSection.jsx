import React from 'react';

import { BookCard } from '../elements';

import { books } from '../../data';

const DiscountedSection = () => {
	return (
		<section id='discount'>
			<div className='container'>
				<div className='row'>
					<h2 className='section-title'>Latest <span className='primary'>Books</span></h2>
					<div className='book-grid'>
						{books.filter((book) => book.salePrice !== null).slice(0,8).map((book) => <BookCard key={book.id} book={book} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscountedSection;