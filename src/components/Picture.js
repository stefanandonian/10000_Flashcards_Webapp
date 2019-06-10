import React from 'react';
import '../styles/picture.css';

class Picture extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div class="image-container"> 
        <div class="title-container">
          {this.props.word}
        </div>
      </div>
    );
  }
}

export default Picture;