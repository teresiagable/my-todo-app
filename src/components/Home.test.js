import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Check that title is Chas Academy', () => {
  render(<Home />);
  const titleElement = screen.getByTitle('Chas Academy');
  expect(titleElement).not.toBeNull();
});
