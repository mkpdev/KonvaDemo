/**
 * Canvas.tsx file
 */
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Layer, Stage } from 'react-konva';
import {
  Col,
  Row
} from 'reactstrap';
import DesignImage from './DesignImage';

// interface IProps {
//   readonly image: string;
//   onFileDrop: (args: any) => void;
// }

export class Canvas extends React.Component<any> {
  public render() {
    const{ image, onFileDrop } = this.props;
    const flag = image !== '';
    return <Row>
      <Col xs={12} className={'canvas-container'} id='canvas'>
        <div className={'object-container'}>
          <img className={'object-img'} alt='image' src='image' />
          <Dropzone onDrop={onFileDrop} disableClick={flag || false} >
            <div className='drawing-area'>
              <Stage width={800} height={500} style={{ background: 'black' }}>
                <Layer>
                  <DesignImage image={image}/>
                </Layer>
              </Stage>
            </div>
          </Dropzone>
        </div>
      </Col>
    </Row>;
  }
}
