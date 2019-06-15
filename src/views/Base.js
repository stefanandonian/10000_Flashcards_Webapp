import React, { Component } from 'react';

import '../styles/app.css';
import Searchbar from '../components/Searchbar.js';

class Home extends Component {
  
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default Home;