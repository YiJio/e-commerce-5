import React from 'react';

import { HighlightCard } from '../elements';

const HighlightsSection = () => {
	return (
		<section id='highlights' className='highlights'>
			<div className='container'>
				<div className='row'>
					<h2 className='section-title'>Why choose <span className='primary'>Library?</span></h2>
					<div className='highlight-wrapper'>
						<HighlightCard icon='bolt' title='Easy and Quick' info='Get access to the book you purchased online instantly.' />
						<HighlightCard icon='book-open' title='10,000+ Books' info='Library has books in all your favorite categories.' />
						<HighlightCard icon='tags' title='Affordable' info='Get your hands on popular books for as little as $10.' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightsSection;