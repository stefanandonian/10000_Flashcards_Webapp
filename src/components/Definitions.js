import React, { Component } from 'react';

class Definitions extends Component {

    constructor(props) {
        super(props);

        this.state = { jsonDefinitions: {}
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
        <div>       
          <h1> { this.props.word } </h1>
            <li className="list">   
              <script>
                for (definition in this.state.jsonDefinitions) {
                  alert(definition)
                }
              </script>

              { /*
              <h3> Relations </h3> 
              <h4> Verb </h4>
              <p> 1. To swim </p>
              <p> 2. To swim fast </p>
              <h4> Noun </h4>
              <p> 1. A swim </p>
              */ }
            </li>
        </div>
      );
    }
  
}

export default Definitions;
