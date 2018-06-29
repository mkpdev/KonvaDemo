import React, {Component} from 'react';
import {Image} from 'react-konva';

class DesignImage extends Component {
  state = {
    image: null
  };

  componentDidMount() {
    this.updateImage();
  }

  componentDidUpdate() {
    this.updateImage();
  }

  updateImage() {
    const image = new window.Image();
    image.src = this.props.image;
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} draggable={true}/>;
  }
}

export default DesignImage;