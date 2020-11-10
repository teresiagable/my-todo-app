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


const divStyle = {
  width: '100%',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}