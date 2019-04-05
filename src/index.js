import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './views/Home';
import Flashcard from './views/Flashcard'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <div> 
            <Route exact path="/" component={ Home } />
            <Route path="/word/:palabra" component={ Flashcard } />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
