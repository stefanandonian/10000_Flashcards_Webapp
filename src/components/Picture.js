import React from 'react';
import './picture.css'

class Picture extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div class="flash-card-base">
          <div class="picture">
               <div class="title-container">
                  <h1 class="title">
                    {this.props.word}
                  </h1>
            </div>
          </div>
        </div>
      );
  }
}

export default Picture;