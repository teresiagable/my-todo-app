import React, { useContext } from 'react';
import DisplayContext from '../../context/DisplayContext';

export default function DisplayuseContext() {
  const theContext = useContext(DisplayContext);

  return (
    <div>
      <h1>
        With hook useContext, isleastimportantcolumn is:
        {theContext.leastimportantcolumn}
      </h1>
    </div>
  );
}
