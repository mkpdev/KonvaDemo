import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { showTask } from './action/index';
import Canvas from './Canvas';
import Tools from './Tools';

class DesignPage extends React.Component<any> {

  public state = {
    files: [],
    image: '',
    text: ''
  };

  public handleTextChange = (e: any) => {
    this.setState({text: e.target.value});
  };

  public handleFileDrop = (files: any) => {
    this.setState({
      files,
      image: files[0].preview
    });
    this.props.showTask(files[0].preview);
  };

  public render() {
    return <Row className='manual_grid'>
      <Col className='button_left' lg={2} md={2}>
        <Tools
          files={this.state.files}
          onTextChange={this.handleTextChange}
          onFileDrop={this.handleFileDrop}
        />
      </Col>
      <Col lg={8} md={8}>
        <Canvas
          text={this.state.text}
          image={this.props.image}
        />
      </Col>
      <Col className='button_right' lg={2} md={2}>
        <Tools
          files={this.state.files}
          onTextChange={this.handleTextChange}
          onFileDrop={this.handleFileDrop}
        />
      </Col>
    </Row>;
  }
}

const mapStateToProps = (state: any) => ({
  image: state.Task.image,
})

const mapDispatchToProps = (dispatch: any) => ({
  showTask : (task: any) => {
    dispatch(showTask(task))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignPage)
