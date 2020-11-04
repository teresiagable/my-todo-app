import React, { Component } from 'react';
import DisplayContext from '../../context/DisplayContext';

export default class DisplayContextComponent extends Component {
  render() {
    return (
      <div>
        <DisplayContext.Consumer>
          {(theContext) => {
            return (
              <h1>
                With Consumer: the value in DisplayContext is:
                {theContext.leastimportantcolumn}
              </h1>
            );
          }}
        </DisplayContext.Consumer>
      </div>
    );
  }
}
