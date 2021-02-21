import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './App.js';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
            <Link to="/popup">
                <button>
                    Popup
                </button>
            </Link>
            <Link to="/options">
                <button>
                    Options
                </button>
            </Link>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
); 
