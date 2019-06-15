import React from 'react';
import '../styles/picture.css';

class Picture extends React.Component {

  constructor(props) {
      super(props);

      this.state = {image_url: ""}
  }

  async componentDidMount() {
    const jsonResponse = await fetch("https://pixabay.com/api/?key=11192744-0760850d09e4a3e42b8c7de16&q="+this.props.word+"&"+
                                    `lang=es&
                                     image_type=photo&
                                     orientation=horizontal&
                                     safesearch=true`,
                                     {mode: "cors",
                                      method: "GET" }).then(response => response.json())
    if(jsonResponse['hits'].length > 0) {
      const randomInt = Math.floor(Math.random() * jsonResponse['hits'].length);
      this.setState({image_url: jsonResponse['hits'][randomInt]['largeImageURL']});
    }
  }

  render() {
    var divStyle = {
      backgroundImage: 'url('+this.state.image_url+')'
    }

    return (
      <div className="image-container" style={divStyle}> 
        <div className="title-container">
          {this.props.word}
        </div>
      </div>
    );
  }
}

export default Picture;