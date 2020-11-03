import { findAllByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import DisplayContext from '../context/DisplayContext';

export default class DisplayMountContext extends Component {
  static contextType = DisplayContext;

  render() {
    return (
      <h1>
        With static contextType, leastimportantcolumn is:
        {this.context.leastimportantcolumn}
      </h1>
    );
  }
}
