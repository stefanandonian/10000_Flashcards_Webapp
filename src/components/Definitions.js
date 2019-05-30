import React, { Component } from 'react';
import '../styles/app.css';

class Definitions extends Component {

    constructor(props) {
        super(props);

        this.state = { jsonDefinitions: []
        };
    }

    
    async componentDidMount() {
      const body = await fetch('http://localhost:8080/RESTful_API/spanish/definition/' + this.props.word, 
                                      { mode: "cors",
                                        method: "GET",
                                        cache: "no-cache",
                                        headers: { "Content-Type": "application/json" } } )
                          .then(response => response.json());
      this.setState({ jsonDefinitions: body })
    }


    render() {
      return (
        <ul aria-label="Definitions">
            {
            this.state.jsonDefinitions.map(function(objDef) {
            return ( 
              <li className="def"> {objDef.strDefinition}  <span className="pos"> {objDef.strPartOfSpeech} </span> </li>
            )})}
        </ul>
      );
    }
  
}

export default Definitions;
