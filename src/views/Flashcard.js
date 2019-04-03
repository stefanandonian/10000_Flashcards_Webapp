import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
        data: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/RESTful_API/spanish/word/agua')
    .then(response => { return response.json() 
    })
    .then(data => {
        alert(JSON.stringify(data))
    })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
