import React, { Component } from 'react';
import DisplayContextComponent from './DisplayContextComponent';
import DisplayuseContext from './DisplayuseContext';
import DisplayMountContext from './DisplayMountContext';

export default class ContextDemo extends Component {
  render() {
    return (
      <>
        <DisplayContextComponent />
        <DisplayuseContext />
        <DisplayMountContext />
      </>
    );
  }
}
