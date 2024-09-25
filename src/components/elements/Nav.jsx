import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LibraryLogo from '../../assets/Library.svg';

const Nav = ({ numItems }) => {

	const toggleMenu = (status) => {
		if(status) { document.body.classList.add('menu-open'); }
		else { document.body.classList.remove('menu-open'); }
	}

	return (
		<nav className='nav'>
			<div className='nav-container'>
				<Link to='/'><img className='nav-logo' src={LibraryLogo} alt='' /></Link>
				<ul className='nav-links'>
					<li><Link className='nav-link' to='/'>Home</Link></li>
					<li><Link className='nav-link' to='/books'>Books</Link></li>
					<li>
						<Link className='nav-link' to='/cart'>
							<FontAwesomeIcon icon='shopping-cart' />
						</Link>
						{numItems > 0 && <span className='nav-cart-note'>{numItems}</span>}
					</li>
				</ul>
				<button className='menu-btn' onClick={() => toggleMenu(true)}>
					<FontAwesomeIcon icon='bars' />
				</button>
			</div>
			<div className='menu-backdrop'>
				<div className='menu-backdrop-wrapper'>
					<button className='menu-btn menu-close' onClick={() => toggleMenu(false)}>
						<FontAwesomeIcon icon='times' />
					</button>
					<ul className='menu-links'>
						<li onClick={() => toggleMenu(false)}><Link className='menu-link' to='/'>Home</Link></li>
						<li onClick={() => toggleMenu(false)}><Link className='menu-link' to='/books'>Books</Link></li>
						<li onClick={() => toggleMenu(false)}>
							<Link className='menu-link' to='/cart'><FontAwesomeIcon icon='shopping-cart' /></Link>
							{numItems > 0 && <span className='menu-cart-note'>{numItems}</span>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;