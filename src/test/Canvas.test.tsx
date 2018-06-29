import { shallow } from "enzyme";
import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import { Col, Row } from 'reactstrap';
import Canvas from '../Canvas';
import DesignImage from '../DesignImage';

it('Canvas Page renders without crashing', () => {
  shallow(<Canvas />).contains(<Row>
    <Col xs={12} className={"canvas-container"} id="canvas">
      <div className={"object-container"}>
        <img className={"object-img"} src={""} alt={""}/>
        <div className="drawing-area">
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <DesignImage />
            </Layer>
          </Stage>
        </div>
      </div>
    </Col>
  </Row>);
});