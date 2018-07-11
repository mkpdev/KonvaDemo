import { configure, shallow } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Col, FormGroup, Row, TabContent, TabPane} from 'reactstrap';
import Tools from '../Tools';

configure({ adapter: new Adapter() });

it('Tools Page renders without crashing', () => {
  const onFileDrop = jest.fn();
  shallow(<Tools  />).contains(<Row>
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