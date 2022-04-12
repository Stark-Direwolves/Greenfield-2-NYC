import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Theme from '../../Theme';
import '@testing-library/jest-dom';
import Related from '../components/Related';

const server = setupServer(
  rest.get('/products/65631/related', (req, res, ctx) => (
    res(ctx.json([
      {
        id: 65631,
        category: 'Kicks',
        name: 'test',
        default_price: '$100',
      },
    ]))
  )),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Related Products', () => {
  it('renders header and related products', async () => {
    render(
      <Theme>
        <Related />
      </Theme>,
    );

    expect(screen.getByRole('heading', { name: 'Related Products' })).toBeInTheDocument();
  });
});
