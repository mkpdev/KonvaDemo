/**
 * Canvas.tsx test file
 */
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Layer, Stage } from 'react-konva';
import { Col, Row } from 'reactstrap';
import {Canvas} from '../Canvas';
import DesignImage from '../DesignImage';

configure({ adapter: new Adapter() });

it('Canvas Page renders without crashing', () => {
  shallow(<Canvas/>).contains(<Row>
    <Col xs={12} className={'canvas-container'} id='canvas'>
      <div className={'object-container'}>
        <img className={'object-img'} src='image' alt='image'/>
        <div className='drawing-area'>
          <Dropzone disableClick={false} >
            <div className='drawing-area'>
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