import React, { useState, useMemo } from 'react';

export default function DemouseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  /*** */
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '100px',
  };

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 1090000000; i++) {}
  return num * 2;
}
