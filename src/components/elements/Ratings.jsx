import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFill, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';

const Ratings = ({ rating, isCard = true}) => {

	const renderRatings = () => {
		let ratingObj = new Array(5).fill(0).map((_, i) => (			
			<FontAwesomeIcon key={i} icon={faStarLine}/>
		));
		let count = 0;
		while (count < Math.floor(rating)) {
			ratingObj[count] = <FontAwesomeIcon key={count} icon={faStarFill} />;
			count++;
		}
		if(!Number.isInteger(rating)) { ratingObj[count] = <FontAwesomeIcon icon={faStarHalfAlt}/>; }
		return ratingObj;
	}

	return (
		<div className={`rating book${isCard ? '-card' : ''}-rating`}>{renderRatings()}</div>
	);
};

export default Ratings;