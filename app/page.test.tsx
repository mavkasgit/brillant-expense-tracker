import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /brilliant expense tracker/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(
      /welcome to your personal expense tracking solution/i
    );
    expect(welcomeMessage).toBeInTheDocument();
  });
}); 