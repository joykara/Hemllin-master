import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga'; // Import react-ga
import { CookiesProvider } from'react-cookie';
import './index.css';
import App from './App';

// Initialize Google Analytics
ReactGA.initialize('G-DEH0JXNN56');

const rootElement = document.getElementById("root");
ReactDOM.render(
       <CookiesProvider>
         <App />
      </CookiesProvider>,
      rootElement
);
