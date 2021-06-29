import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render( 
     <BrowserRouter>
          <App />
     </BrowserRouter>, // gives app all the functionality of routing this library provides
     
     document.getElementById('root'));
