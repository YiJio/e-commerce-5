import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BookCard, Ratings, Price } from '../components/elements';

const Book = ({ books, addItem }) => {
	const { id } = useParams();
	const book = books.find((book) => +book.id === +id);

	return (
		<main>
			<section id='book'>
				<div className='container'>
					<div className='row'>
						<div className='section-header'>
							<Link to='/books'>
								<div className='back'>
									<FontAwesomeIcon icon='arrow-left' />
									<span>Books</span>
								</div>
							</Link>
						</div>
						<div className='book'>
							<figure className='book-img-wrapper'>
								<img className='book-img' src={book.url} alt='' />
							</figure>
							<div className='book-desc'>
								<h2>{book.title}</h2>
								<Ratings rating={book.rating} isCard={false} />
								<Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
								<h3>Summary</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Veniam, repellendus modi odio porro, consequuntur,
									asperiores minima sint voluptatem at reiciendis ducimus
									neque provident alias iure nihil explicabo nobis id
									voluptas.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Veniam, repellendus modi odio porro, consequuntur,
									asperiores minima sint voluptatem at reiciendis ducimus
									neque provident alias iure nihil explicabo nobis id
									voluptas.</p>
								<button className='primary-btn' onClick={() => addItem(book)}>Add to Cart</button>
							</div>
						</div>
						<div className='book-recommend'>
							<h2>Recommended Books</h2>
							<div className='row'>
								<div className='book-grid'>
									{books.filter((book) => {
										if (id) { return book.rating === 5 && book.id != id; }
										return book.rating === 5;
									}).slice(0, 4).map((book) => { return <BookCard book={book} key={book.id} /> })}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Book;
