import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Footer, Nav } from './components/elements';
import Home from './pages/Home';
import Books from './pages/Books';
import Book from './pages/Book';
import Cart from './pages/Cart';

import { books } from './data';

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (book) => {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [...oldCart.map((item) => {
          return item.id === dupeItem.id
            ? { ...item, quantity: item.quantity + 1, }
            : item;
        }),
        ] : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  const removeItem = (item) => {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  const updateCart = (item, newQuantity) => {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return { ...oldItem, quantity: newQuantity, };
        } else {
          return oldItem;
        }
      })
    );
  }

  const numItems = () => {
    let counter = 0;
    cart.forEach((item) => { counter += +item.quantity; });
    return counter;
  }

  const calcPrices = () => {
    let total = 0;
    cart.forEach((item) => { total += (item.salePrice || item.originalPrice) * item.quantity; });
    return { subtotal: total, tax: total * 0.1 };
  }

  return (
    <Router>
      <div className='App'>
        <Nav numItems={numItems()} />
        <Route path='/' exact render={() => <Home books={books} />} />
        <Route path='/books' exact render={() => <Books books={books} />} />
        <Route path='/book/:id' render={() => (<Book books={books} addItem={addItem} />)} />
        <Route path='/cart' render={() => (<Cart cart={cart} updateCart={updateCart} removeItem={removeItem} totals={calcPrices()} />)} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
