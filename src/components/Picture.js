import React, { Component } from 'react';
import './picture.css'

class Picture extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div class="image-container">
              <img className="picture"  
                   src={require("../resources/img/test-image.jpg")} 
                   alt="Beautiful Nature Dummy"/> 
              <div class="transparent-bar">
                <h1>
                  <span>{this.props.word}</span>
                </h1>
              </div>
            </div>
        );
    }
}

export default Picture;