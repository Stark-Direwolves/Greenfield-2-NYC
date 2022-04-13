import React from 'react';
import { render, screen } from '@testing-library/react';
import Theme from '../../Theme';
import '@testing-library/jest-dom';
import Comparison from '../components/Comparison';

const current = {
  name: 'Blues Suede Shoes',
  features: [{
    feature: 'Sole',
    value: 'Rubber',
  }],
};

const related = {
  name: 'Summer Shoes',
  features: [{
    feature: 'Sole',
    value: 'Rubber',
  }],
};

describe('Comparison Modal', () => {
  it('renders comparison modal', () => {
    render(
      <Theme>
        <Comparison compare current={current} related={related} />
      </Theme>,
    );
    expect(screen.getByTestId('comparison').toBeInTheDocument());
    expect(screen.getByTestId('modalButton').toBeInTheDocument());
  });

  it('doesn\'t render comparison modal', () => {
    render(<Comparison compare={false} />);
    expect(screen.queryByTestId('comparison')).toBe(null);
  });
});
