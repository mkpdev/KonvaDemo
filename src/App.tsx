import * as React from 'react';
import { Component } from 'react';
import './App.css';
import DesignPage from './DesignPage';

class App extends Component {
  public render() {
    return (
      <div className="container">
        <DesignPage />
      </div>
    );
  }
}

export default App;