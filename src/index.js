import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

import Base from './views/Base';
import Flashcard from './views/Flashcard'

import Test from './views/Test.js'

const routing = (
    <BrowserRouter>
      <Route exact path="/" component={ Base } />
      <Route path="/word/:palabra" component={ Flashcard } />
      <Route path="/test/:palabra" component={Test} />
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
