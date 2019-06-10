import React, { Component } from 'react';

class Connections extends Component {

    constructor(props) {
        super(props);

        this.state = { jsonConnections: []
        };
    }

    async componentDidMount() {
      const body = await fetch('http://localhost:8080/RESTful_API/spanish/connection/' + this.props.word, 
                                      { mode: "cors",
                                        method: "GET",
                                        cache: "no-cache",
                                        headers: { "Content-Type": "application/json" } } )
                          .then(response => response.json());
      this.setState({ jsonConnections: body })
    }

    render() {
      return (
        <ul aria-label="Connections">
            {
            this.state.jsonConnections.map(function(objCon) {
            return ( 
              <li> {objCon.strTo} </li>
            )})}
        </ul>
      );
    }
  
}

export default Connections;
