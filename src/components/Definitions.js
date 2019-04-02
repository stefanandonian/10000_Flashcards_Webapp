import React, { Component } from 'react';

class Definitions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/RESTful_API/spanish/word/agua')
        .then(response => response.json())
        .then(data =>  this.setState({ data }))
        
        alert(this.state.data)
    }

    render() {
    return (
      <div>       
          
      </div>
    );
  }
}

export default App;
