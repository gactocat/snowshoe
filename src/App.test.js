import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Initial rendering.', () => {
  render(<App />);
  expect(screen.getByText('Prev')).toBeDisabled();
  expect(screen.getByText('Next')).toBeEnabled();
  expect(screen.getByRole('heading')).toHaveTextContent('Pawn');
});

test('Operating the navigations.', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Next'), {
    target: { value: 'JavaScript' },
  });
  expect(screen.getByText('Prev')).toBeEnabled();
  expect(screen.getByText('Next')).toBeEnabled();
  expect(screen.getByRole('heading')).toHaveTextContent('Lance');
});
