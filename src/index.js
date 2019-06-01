import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import Flashcard from './views/Flashcard'

import Picture from './components/Picture.js'

const routing = (
    <BrowserRouter>
        <div> 
            <Route exact path="/" component={ Home } />
            <Route path="/word/:palabra" component={ Flashcard } />
            <Route path="/test" component={Picture} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
