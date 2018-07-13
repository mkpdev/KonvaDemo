/**
 * App.tsx file
 */
import * as React from 'react';
import './App.css';
import DesignPage from './DesignPage';

export class App extends React.Component {
  public render() {
    return (
      <div className='container'>
        <DesignPage />
      </div>
    );
  }
}
