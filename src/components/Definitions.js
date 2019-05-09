import React, { Component } from 'react';

class Definitions extends Component {

    constructor(props) {
        super(props);

        this.state = { jsonDefinitions: {}
        };
    }

    componentDidMount() {
      const jsonServerResponse = fetch('http://localhost:8080/RESTful_API/definition/word/' + this.props.word, { mode: 'cors' } )
                                 .then(response => { 
                                   console.log(response.body)
                                  return response.json() 
                                  });
      
      alert(JSON.stringify(jsonServerResponse));
      this.setState({ jsonDefinitions: jsonServerResponse })
    }

    render() {

    return (
      <div>       
          <h1> { this.props.word } </h1>
      </div>
    );
  }
  
}

export default Definitions;
