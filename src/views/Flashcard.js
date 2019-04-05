import React, { Component } from 'react';
import '../styles/Flashcard.css'

class Flashcard extends Component {

  constructor() {
    super();
    this.state = {
        word_attributes: ""
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:8080/RESTful_API/spanish/word/agua')
  //   .then(response => { return response.json() 
  //   })
  //   .then(data => {
  //     this.setState(
  //       { word_attributes: data }
  //     )
  //   })
  // }

  render() {
    return (
      <div className="flashcard-base">
          <img className="flashcard-image" src={require("../resources/img/test-image.jpg")} alt="Beautiful Nature Dummy" /> 
          <h1> { this.props.match.palabra } </h1>
      </div>
    );
  }
}

export default Flashcard;
