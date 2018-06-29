import * as React from 'react';
import Dropzone from 'react-dropzone';
import {
  Col,
  FormGroup,
  Row,
  TabContent,
  TabPane
} from 'reactstrap';

class Tools extends React.Component<any> {
  public state = {
    activeTab: '1'
  };

  public toggle = (tab: any) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  public render() {
    return (
      <Row>
        <Col xs={12}>
          <div>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <button className="dropzone-container1">
                        <Dropzone style={{ width: '150px', height: '30px'}} onDrop={this.props.onFileDrop}>
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
      </Row>
    );
  }
}

export default Tools;