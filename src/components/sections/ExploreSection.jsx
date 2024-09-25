import React from 'react';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
	return (
		<section id='explore'>
			<div className='container'>
				<div className='row'>
					<h2 className='section-title'>Explore more <span className='primary'>Books</span></h2>
					<div className='flex'>
						<Link to='/books'><button className='primary-btn'>Browse books</button></Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreSection;