import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga'; // Import react-ga
import { CookiesProvider } from'react-cookie';
import './index.css';
import App from './App';

// Initialize Google Analytics
ReactGA.initialize('G-GF16SJCMHV');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <CookiesProvider>
         <App />
      </CookiesProvider>
);
