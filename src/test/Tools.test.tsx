import { shallow } from "enzyme";
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Col, FormGroup, Row, TabContent, TabPane} from 'reactstrap';
import Tools from '../Tools';

it('Canvas Page renders without crashing', () => {
  const onFileDrop = jest.fn();
  shallow(<Tools />).contains(<Row>
    <Col xs={12}>
      <div>
        <TabContent>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <button className="dropzone-container1">
                    <Dropzone onDrop={onFileDrop}>
                      Select picture
                    </Dropzone>
                  </button>
                </FormGroup>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Col>
  </Row>);
});