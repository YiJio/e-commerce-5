import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HighlightCard = ({ icon, title, info }) => {
	return (
		<div className='highlight-card'>
			<div className='highlight-img'>
				<FontAwesomeIcon icon={icon} />
			</div>
			<h3 className='highlight-title'>{title}</h3>
			<p className='highlight-desc'>{info}</p>
		</div>
	);
};

export default HighlightCard;