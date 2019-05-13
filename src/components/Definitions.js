import React, { Component } from 'react';

class Definitions extends Component {

    constructor(props) {
        super(props);

        this.state = { jsonDefinitions: {}
        };
    }

    async componentDidMount() {
      const { body } = await fetch('http://localhost:8080/RESTful_API/spanish/definition/' + this.props.word, 
                                      { mode: "cors",
                                        method: "GET",
                                        headers: { "Content-Type": "text/plain" } } )
      alert(JSON.stringify(body))
      //this.setState({ jsonDefinitions: jsonServerResponse })
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
