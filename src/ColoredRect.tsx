import * as React from 'react';
import { Image } from 'react-konva';
import * as Logo from './download.jpg';

declare global {
  interface IWindow {
     Image: typeof Image;
  }
}

class ColoredRect extends React.Component<any, any> {
  public state = {
    image: new (window as any).Image() || null,
    x: 20,
    y: 20
  };

  public componentDidMount() {
    const image = new (window as any).Image();
    image.src = Logo;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image.src
      });
    };
  }

  public handleDragEnd = (e: any) => {
    this.setState({
      x: e.target.x() + 10,
      y: e.target.y()
    });
  };

  public render() {
    return (
      <Image
        image={this.state.image}
        width={50}
        height={50}
        shadowBlur={5}
        onDragEnd={this.handleDragEnd}
        draggable={true}
      />
    );
  }
}

export default ColoredRect;