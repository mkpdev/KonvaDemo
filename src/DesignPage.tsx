import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { showTask } from './action/index';
import Canvas from './Canvas';
import Tools from './Tools';

interface IState {
  files: {};
  image: string;
}

class DesignPage extends React.Component <{showTask: (args: {}) => void },IState> {
  public state: IState = {
    files: {},
    image: ''
  };

  public handleFileDrop = (files: {}) => {
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
          onFileDrop={this.handleFileDrop}
        />
      </Col>
      <Col lg={8} md={8}>
        <Canvas
          image={this.state.image}
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
