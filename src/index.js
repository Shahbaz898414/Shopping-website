import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from '../src/context/product-context';
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvier } from './context/authContext/authContext';



ReactDOM.render(
  <React.StrictMode>
    <AuthProvier>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </AuthProvier>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
