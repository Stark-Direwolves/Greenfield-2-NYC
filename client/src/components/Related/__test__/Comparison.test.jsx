import React from 'react';
import { render } from '@testing-library/react';
import Comparison from '../components/Comparison';

describe('Comparison Modal', () => {
  it('renders comparison modal', () => {
    const { getByTestId } = render(<Comparison compare />);
    const background = getByTestId('comparison');
    expect(background).toBeTruthy();
  });

  it('doesn\'t render comparison modal', () => {
    const { queryByTestId } = render(<Comparison compare={false} />);
    const background = queryByTestId('comparison');
    expect(background).toBe(null);
  });

  it('renders modal button', () => {
    const { getByTestId } = render(<Comparison compare />);
    const button = getByTestId('modalButton');
    expect(button).toBeTruthy();
  });
});
