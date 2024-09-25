import React from 'react';
import { Link } from 'react-router-dom';

import UndrawBooks from '../../assets/Undraw_Books.svg';
const LandingSection = () => {
	return (
		<section id='landing'>
			<header className='header'>
				<div className='header-container'>
					<div className='header-description'>
						<h1>Australia's most awarded online library platform</h1>
						<h2>Find your dream book with <span className='primary'>Library</span></h2>
						<Link to='/books'>
							<button className='primary-btn'>Browse books</button>
						</Link>
					</div>
					<figure className='header-img-wrapper'>
						<img className='header-img' src={UndrawBooks} alt='' />
					</figure>
				</div>
			</header>
		</section>
	);
};

export default LandingSection;