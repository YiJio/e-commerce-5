import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Ratings from './Ratings';
import Price from './Price';

const BookCard = ({ book }) => {
	const [img, setImg] = useState();

	const mountedRef = useRef(true);

	useEffect(() => {
		const image = new Image();
		image.src = book.url;
		image.onload = () => {
			setTimeout(() => {
				if (mountedRef.current) { setImg(image); }
			}, 300);
		}
		return () => { mountedRef.current = false; }
	}, [book.url])

	return (
		<div className='book-card'>
			<div className='book-wrapper'>
				{!img ? <>
					<div className="book-img-skeleton"></div>
          <div className="skeleton book-card-title-skeleton"></div>
          <div className="skeleton book-card-rating-skeleton"></div>
          <div className="skeleton book-card-prices-skeleton"></div>
				</> : <>
					<Link to={`/book/${book.id}`}>
						<figure className='book-card-img-wrapper'>
							<img className='book-card-img' src={img.src} alt='' />
						</figure>
					</Link>
					<div className='book-card-title'>
						<Link to={`/book/${book.id}`}>{book.title}</Link>
					</div>
					<Ratings rating={book.rating} />
					<Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
				</>}
			</div>
		</div>
	);
};

export default BookCard;