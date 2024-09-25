import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar as faStarFill, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';

import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';

library.add(faBars, faTimes, faBolt, faBookOpen, faTags, faStarFill, faStarLine, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
