import React, { useState, useEffect } from 'react';

import { BookCard } from '../components/elements';

const Books = ({ books: originalBooks }) => {
	const [books, setBooks] = useState(originalBooks);

	useEffect(() => {
		setBooks(originalBooks);
	}, [originalBooks]);

	const filterBooks = (e) => {
		let filter = e.target.value;
		switch (filter) {
			case 'LOW_TO_HIGH':
				return setBooks(
					books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
				);
			case 'HIGH_TO_LOW':
				return setBooks(
					books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
				);
			case 'RATING':
				return setBooks(books.slice().sort((a, b) => b.rating - a.rating));
			default:
				break;
		}
	}

	return (
		<main>
			<section id='books'>
				<div className='container'>
					<div className='row'>
						<div className='section-header'>
							<div className='section-title'>All <span className='primary'>Books</span></div>
							<div className='books-filter'>
								Sort by
								<select id='filter' className='sort-dropdown' onChange={filterBooks} defaultValue={'DEFAULT'}>
									<option value='DEFAULT' disabled>Sort</option>
									<option value='LOW_TO_HIGH'>Price, Low to High</option>
									<option value='HIGH_TO_LOW'>Price, High to Low</option>
									<option value='RATING'>Rating</option>
								</select>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='book-grid'>
							{books && books.map((book) => {
								return <BookCard key={book.id} book={book} />
							})}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Books;