import * as React from 'react';
import Dropzone from 'react-dropzone';
import {
  Col,
  FormGroup,
  Row,
  TabContent,
  TabPane
} from 'reactstrap';

interface IState {
  activeTab: number;
}


class Tools extends React.Component<any, IState> {
  public state: IState = {
    activeTab: 1
  };

  public toggle = (tab: number) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  public render() {
    const {activeTab}  = this.state;
    const {onFileDrop} = this.props;
    return (
      <Row>
        <Col xs={12}>
          <div>
            <TabContent activeTab={activeTab} >
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <button className="dropzone-container1">
                        <Dropzone style={{ width: '150px', height: '30px'}} onDrop={onFileDrop}>
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