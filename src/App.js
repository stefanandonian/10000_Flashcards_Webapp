import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<body className="App-header"> */}
          <Searchbar />
        {/*</body>*/}
      </div>
    );
  }
}

export default App;
