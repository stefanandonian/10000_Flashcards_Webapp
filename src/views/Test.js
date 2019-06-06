import React, { Component } from 'react';
import '../styles/test.css'

class Test extends React.Component {

    render() {
        return (
            <div class="container">
              {this.props.match.params.palabra}
            </div>
        );
    }
}

export default Test;