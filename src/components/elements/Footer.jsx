import React from 'react';
import { Link } from 'react-router-dom';

import LibraryLogo from '../../assets/Library.svg';

const Footer = () => {
	return (
		<footer className='footer'>
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<figure className='footer-logo'>
						<Link to='/'>
							<img className='footer-logo-img' src={LibraryLogo} alt='' />
						</Link>
					</figure>
					<div className='footer-links'>
						<Link className='footer-link' to='/'>Home</Link>
						<Link className='footer-link' to='/'>About</Link>
						<Link className='footer-link' to='/books'>Books</Link>
						<Link className='footer-link' to='/'>Contact</Link>
					</div>
					<div className='footer-copyright'>Copyright &copy; 2024 Library</div>
				</div>
			</div>
		</div>
	</footer>
	);
};

export default Footer;