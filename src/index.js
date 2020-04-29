import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginContextProvider from './contexts/loginContext';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <LoginContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LoginContextProvider>
    , document.getElementById('root')
);

