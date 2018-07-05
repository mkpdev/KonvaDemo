import { shallow } from "enzyme";
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Layer, Stage } from 'react-konva';
import { Col, Row } from 'reactstrap';
import Canvas from '../Canvas';
import DesignImage from '../DesignImage';

it('Canvas Page renders without crashing', () => {
  const onFileDrop = jest.fn();
  shallow(<Canvas />).contains(<Row>
    <Col xs={12} className={"canvas-container"} id="canvas">
      <div className={"object-container"}>
        <img className={"object-img"} src={""} alt={""}/>
        <div className="drawing-area">
          <Dropzone onDrop={onFileDrop} disableClick={false} >
            <div className="drawing-area">
              <Stage width={800} height={500} style={{ background: 'black' }}>
                <Layer>
                  <DesignImage />
                </Layer>
              </Stage>
            </div>
          </Dropzone>
        </div>
      </div>
    </Col>
  </Row>);
});