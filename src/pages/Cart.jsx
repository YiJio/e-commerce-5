import React from 'react';
import { Link } from 'react-router-dom';

import EmptyCart from '../assets/empty_cart.svg';

const Cart = ({ cart, updateCart, removeItem, totals }) => {
	return (
		<div id='books__body'>
			<main>
				<section id='cart'>
					<div className='container'>
						<div className='row'>
							<div className='section-header'>
								<div className='section-title'>Cart</div>
							</div>
							<div className='cart'>
								<div className='cart-header'>
									<span className='cart-book'>Book</span>
									<div className='cart-action'>
										<span className='cart-quantity'>Quantity</span>
										<span className='cart-total'>Price</span>
									</div>
								</div>
								<div className='cart-body'>
									{cart.map((item) => {
										const itemPrice = item.salePrice || item.originalPrice;
										return (
											<div className='cart-item' key={item.id}>
												<div className='cart-book'>
													<img className='cart-book-img' src={item.url} alt='' />
													<div className='cart-book-info'>
														<span className='cart-book-title'>{item.title}</span>
														<span className='cart-book-price'>${itemPrice.toFixed(2)}</span>
														<button className='cart-book-remove' onClick={() => removeItem(item)}>Remove</button>
													</div>
												</div>
												<div className='cart-action'>
													<div className='cart-quantity'>
														<input type='number' className='cart-input' min={0} max={99} value={item.quantity} onChange={(event) => updateCart(item, event.target.value)} />
													</div>
													<div className='cart-total'>${(itemPrice * item.quantity).toFixed(2)}</div>
												</div>
											</div>
										);
									})}
									{(!cart || !cart.length) && (
										<div className='cart-empty'>
											<img className='cart-empty-img' src={EmptyCart} alt='' />
											<h2>You don't have any books in your cart!</h2>
											<Link to='/books'>
												<button className='primary-btn'>Browse books</button>
											</Link>
										</div>
									)}
								</div>
							</div>
							{cart && cart.length > 0 && (
								<div className='total'>
									<div className='total-item total-sub-total'>
										<span>Subtotal</span>
										<span>${totals.subtotal.toFixed(2)}</span>
									</div>
									<div className='total-item total-tax'>
										<span>Tax</span>
										<span>${totals.tax.toFixed(2)}</span>
									</div>
									<div className='total-item total-price'>
										<span>Total</span>
										<span>${(totals.subtotal + totals.tax).toFixed(2)}</span>
									</div>
									<button className='primary-btn checkout-btn' onClick={() => alert(`No functionality.`)}>Proceed to checkout</button>
								</div>
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Cart;
