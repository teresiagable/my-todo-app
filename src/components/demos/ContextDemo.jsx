import React, { Component } from 'react';
import DisplayContextComponent from './DisplayContextComponent';
import DisplayuseContext from './DisplayuseContext';

export default class ContextDemo extends Component {
  render() {
    return (
      <>
        <DisplayContextComponent />
        <DisplayuseContext />
      </>
    );
  }
}