import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { NavBar } from './components/navbar'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('CONTATO');
  expect(linkElement).toBeInTheDocument();
});
test('render navbar component', () => {
  render(<NavBar />)
})
