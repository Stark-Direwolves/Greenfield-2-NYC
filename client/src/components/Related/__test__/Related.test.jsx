import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Theme from '../../Theme';
import '@testing-library/jest-dom';
import Related from '../components/Related';

const data = [];

describe('Related Products', () => {
  it('renders header and related products', () => {
    render(
      <Theme>
        <Related relatedProducts={data} />
      </Theme>,
    );

    expect(screen.getByRole('heading', { name: 'Related Products' })).toBeInTheDocument();
  });
});
