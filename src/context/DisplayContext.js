import { createContext } from 'react';

const DisplayContext = createContext({
  leastimportantcolumn: 1000,
  lightStyle: 'bg-light',
});

export default DisplayContext;
