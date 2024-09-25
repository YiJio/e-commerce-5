import React from 'react';

import { BookCard } from '../elements';

import { books } from '../../data';

const FeaturedSelection = () => {

	return (
		<section id='features'>
			<div className='container'>
				<div className='row'>
					<h2 className='section-title'>Featured <span className='primary'>Books</span></h2>
					<div className='book-grid'>
						{books.filter((book) => book.rating === 5).slice(0,4).map((book, i) => <BookCard key={book.id} book={book} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedSelection;